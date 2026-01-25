import { createContext, FC, ReactNode, useEffect, useMemo, useState } from "react";
import { ConfigContextType, Language, Translations } from "../types";
import esTranslations from '../translations/es.json';
import enTranslations from '../translations/en.json';

// Mapeo de idiomas a sus traducciones
const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
};

const defaultContextValue: ConfigContextType = {
  language: 'es',
  translations: esTranslations,
  setLanguage: () => {},
};

export const ConfigContext = createContext<ConfigContextType>(defaultContextValue);

const ConfigProvider: FC<{ children: ReactNode }> = ({children}) => {
    const getInitialLanguage = (): Language => {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved && ['es', 'en'].includes(saved)) return saved;

    const browserLang = navigator.language.split('-')[0] as Language;
    if (['es', 'en'].includes(browserLang)) return browserLang;

    return 'es';
  };

    const [language, setLanguage] = useState<Language>(getInitialLanguage());

    useEffect(() => {
    localStorage.setItem('language', language);
    // Opcional: actualizar atributo lang del <html>
    document.documentElement.lang = language;
  }, [language]);

  // Memorizamos el valor para evitar renders innecesarios
  const value = useMemo(
    () => ({
      language,
      translations: translations[language],
      setLanguage,
    }),
    [language]
  );

    return  (<ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>);
}
 
export default ConfigProvider;