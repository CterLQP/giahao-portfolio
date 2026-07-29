"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && (savedLang === "vi" || savedLang === "en" || savedLang === "fr")) {
      setTimeout(() => setLang(savedLang), 0);
    }
  }, []);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    localStorage.setItem("language", newLang);
    document.documentElement.lang = newLang;
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
