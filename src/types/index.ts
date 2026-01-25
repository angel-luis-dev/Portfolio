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
  finanzasDescription: string;
  aboutMe1: string;
  aboutMe2: string;
  // añade todas tus claves aquí
}