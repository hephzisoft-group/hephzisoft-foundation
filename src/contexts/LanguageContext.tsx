import React, { createContext, useContext, useState, useEffect } from "react";
import { translations as enTranslations } from "../translations/en";
import { translations as krTranslations } from "../translations/kr";

export type Language = "en" | "kr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>("en");

  // Load saved language or detect from URL
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    const urlLanguage = window.location.pathname.startsWith("/kr/")
      ? "kr"
      : "en";

    if (savedLanguage && ["en", "kr"].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      setLanguageState(urlLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);

    // Update URL to match language
    const currentPath = window.location.pathname;
    const newPath =
      lang === "kr"
        ? `/kr${currentPath.replace("/kr", "")}`
        : currentPath.replace("/kr", "");

    if (newPath !== currentPath) {
      window.history.pushState({}, "", newPath);
    }
  };

  // Translation function with nested object support
  const t = (key: string): string => {
    const translations = language === "kr" ? krTranslations : enTranslations;

    // Support nested keys like 'nav.home'
    const keys = key.split(".");
    let value: any = translations;

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        return key; // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
