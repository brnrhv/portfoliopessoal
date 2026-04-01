/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, type ReactNode } from 'react';
import pt from './pt.json';
import en from './en.json';

type Language = 'pt' | 'en';
type Translations = typeof pt;

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: keyof Translations) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const dictionaries = {
  pt,
  en,
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const t = (key: keyof Translations): any => {
    return dictionaries[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
