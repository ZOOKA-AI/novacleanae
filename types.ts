
export enum ServiceCategory {
  CLEANING = 'Cleaning',
  DISINFECTION = 'Disinfection',
  PEST_CONTROL = 'Pest Control',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface GroundingSource {
  title?: string;
  uri?: string;
}

export interface ImageAnalysisResult {
  summary: string;
  details: string[];
  recommendation: string;
}
