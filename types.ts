
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

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    aiLab: string;
    contact: string;
    language: string;
  };
  about: {
    title: string;
    subtitle: string;
    desc1: string;
    desc2: string;
    vision: string;
    vision_desc: string;
  };
  landing: {
    badge: string;
    title: string;
    subtitle: string;
    cta_main: string;
    cta_whatsapp: string;
    pain_points_title: string;
    pain_1: string;
    pain_2: string;
    pain_3: string;
    solution_title: string;
    sol_1: string;
    sol_2: string;
    sol_3: string;
    form_title: string;
    form_desc: string;
    field_space: string;
    field_size: string;
    field_button: string;
  };
  why_choose: {
    title: string;
    subtitle: string;
    item1_title: string;
    item1_desc: string;
    item2_title: string;
    item2_desc: string;
    item3_title: string;
    item3_desc: string;
    item4_title: string;
    item4_desc: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta_book: string;
    cta_ai: string;
  };
  services: {
    title: string;
    subtitle: string;
    cleaning: string;
    cleaning_desc: string;
    pest: string;
    pest_desc: string;
    disinfection: string;
    disinfection_desc: string;
  };
  ai_lab: {
    title: string;
    subtitle: string;
    voice_title: string;
    voice_desc: string;
    visual_title: string;
    visual_desc: string;
    video_title: string;
    video_desc: string;
    search_title: string;
    search_desc: string;
    seo_title: string;
    seo_desc: string;
  };
  visual_lab: {
    generate_tab: string;
    analyze_tab: string;
    prompt_placeholder: string;
    cta_generate: string;
    cta_analyze: string;
    resolution: string;
  };
  contact: {
    title: string;
    phone: string;
    email: string;
    address: string;
  };
}

export interface TranslationProps {
  t: Translations;
}

export interface TranslationWithLangProps extends TranslationProps {
  lang: 'en' | 'ar';
}

export interface HeaderProps extends TranslationProps {
  toggleLang: () => void;
  currentLang: 'en' | 'ar';
}
