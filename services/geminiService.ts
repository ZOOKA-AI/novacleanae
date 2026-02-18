
import { GoogleGenAI, Type, Modality, GenerateContentResponse } from "@google/genai";
import { GroundingSource } from "../types";

interface GoogleSearchTool {
  googleSearch: Record<string, never>;
}

interface GoogleMapsTool {
  googleMaps: Record<string, never>;
}

type GeminiTool = GoogleSearchTool | GoogleMapsTool;

interface ToolConfig {
  retrievalConfig?: {
    latLng: {
      latitude: number;
      longitude: number;
    };
  };
}

interface GroundingChunk {
  web?: {
    title: string;
    uri: string;
  };
  maps?: {
    title: string;
    uri: string;
  };
}

interface VideoGenerationParams {
  model: string;
  prompt: string;
  config: {
    numberOfVideos: number;
    resolution: string;
    aspectRatio: '16:9' | '9:16';
  };
  image?: {
    imageBytes: string;
    mimeType: string;
  };
}

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

// 1. Basic Chat with Pro
export const startChat = (systemInstruction: string) => {
  const ai = getAI();
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: { systemInstruction }
  });
};

// 2. Image Analysis (Pro)
export async function analyzeImage(base64Data: string, prompt: string): Promise<string> {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: {
      parts: [
        { inlineData: { data: base64Data, mimeType: 'image/jpeg' } },
        { text: prompt }
      ]
    }
  });
  return response.text || "No analysis generated.";
}

// 3. Image Generation (Pro Image)
export async function generateNovaImage(prompt: string, size: "1K" | "2K" | "4K" = "1K") {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: { parts: [{ text: prompt }] },
    config: {
      imageConfig: {
        aspectRatio: "1:1",
        imageSize: size
      }
    }
  });
  
  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) return `data:image/png;base64,${part.inlineData.data}`;
  }
  return null;
}

// 4. Search & Maps Grounding (Flash)
export async function searchServices(query: string, location?: { lat: number, lng: number }): Promise<{ text: string, sources: GroundingSource[] }> {
  const ai = getAI();
  const tools: GeminiTool[] = [{ googleSearch: {} }];
  let toolConfig: ToolConfig | undefined = undefined;

  if (location) {
    tools.push({ googleMaps: {} });
    toolConfig = {
      retrievalConfig: {
        latLng: {
          latitude: location.lat,
          longitude: location.lng
        }
      }
    };
  }

  const response = await ai.models.generateContent({
    model: location ? 'gemini-2.5-flash' : 'gemini-3-flash-preview',
    contents: query,
    config: { tools, toolConfig }
  });

  const sources: GroundingSource[] = [];
  const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  chunks.forEach((chunk: GroundingChunk) => {
    if (chunk.web) sources.push({ title: chunk.web.title, uri: chunk.web.uri });
    if (chunk.maps) sources.push({ title: chunk.maps.title, uri: chunk.maps.uri });
  });

  return { text: response.text || '', sources };
}

// 5. Veo Video Generation
export async function generateVeoVideo(prompt: string, aspectRatio: '16:9' | '9:16' = '16:9', imageBase64?: string): Promise<string | null> {
  const ai = getAI();
  const params: VideoGenerationParams = {
    model: 'veo-3.1-fast-generate-preview',
    prompt,
    config: {
      numberOfVideos: 1,
      resolution: '720p',
      aspectRatio
    }
  };

  if (imageBase64) {
    params.image = {
      imageBytes: imageBase64,
      mimeType: 'image/jpeg'
    };
  }

  let operation = await ai.models.generateVideos(params);
  
  while (!operation.done) {
    await new Promise(resolve => setTimeout(resolve, 8000));
    operation = await ai.operations.getVideosOperation({ operation: operation });
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  if (!downloadLink) return null;
  
  const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}

// 6. Live Audio Helpers
export function decodeBase64(base64: string) {
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function encodeUint8(bytes: Uint8Array) {
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export async function decodeAudioBuffer(data: Uint8Array, ctx: AudioContext, sampleRate: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const buffer = ctx.createBuffer(1, dataInt16.length, sampleRate);
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < dataInt16.length; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }
  return buffer;
}
