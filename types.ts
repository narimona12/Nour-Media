
export type Language = 'en' | 'ru' | 'uz';

export interface TranslationContent {
  nav: {
    services: string;
    about: string;
    contact: string;
    aiConsultant: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  services: {
    title: string;
    web: {
      name: string;
      desc: string;
    };
    automation: {
      name: string;
      desc: string;
    };
    funnels: {
      name: string;
      desc: string;
    };
  };
  ai: {
    title: string;
    placeholder: string;
    button: string;
    thinking: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
  };
  footer: {
    rights: string;
  };
}

export type Translations = Record<Language, TranslationContent>;
