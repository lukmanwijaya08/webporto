// components/language-provider.tsx
"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "id";
type LanguageContextType = {
    lang: Language;
    toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>("en");

    useEffect(() => {
        const storedLang = localStorage.getItem("lang") as Language;
        if (storedLang) setLang(storedLang);
    }, []);

    const toggleLang = () => {
        const newLang = lang === "en" ? "id" : "en";
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}