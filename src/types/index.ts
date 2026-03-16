export type Language = 'es' | 'en';

export interface ConfigContextType {
  language: Language;
  translations: Translations;
  setLanguage: (lang: Language) => void;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

export interface example {
  type: 'PHOTO' | 'VIDEO';
  content: string;
  description?: string;
}

export interface ProjectType {
  title: string;
  description: string;
  photo: string;
  tecnologies: string[];
  type: 'PERSONAL' | 'UCI';
  examples?: example[];
}

export interface Translations {
  tecnologies: string;
  experience: string;
  projects: string;
  formation: string;
  aboutMe: string;
  spanish: string;
  english: string;
  fullStackDeveloper: string;
  developer: string;
  dataBase: string;
  recetaDescription: string;
  bankRegisterDescription: string;
  finanzasDescription: string;
  distraDescription: string;
  dgesicDescription: string;
  trazasDescription: string;
  aboutMe1Title: string;
  aboutMe1: string;
  aboutMe2Title: string;
  aboutMe2: string;
  aboutMe3Title: string;
  aboutMe3: string;
  // añade todas tus claves aquí
}
