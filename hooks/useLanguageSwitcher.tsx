import { useState, useEffect } from "react";

const useLanguageSwitcher = () => {
  const [language, setLanguage] = useState<string | null>(null);

  const changeLanguage = (labelType: string) => {
    if (labelType && labelType.startsWith("language-")) {
      const newLanguage = labelType.replace("language-", "").trim();
      setLanguage(newLanguage.toLowerCase());
      localStorage.setItem("language", newLanguage);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const storedLanguage = localStorage.getItem("language");
      if (storedLanguage) {
        setLanguage(storedLanguage.toLowerCase());
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return { language, changeLanguage };
};

export default useLanguageSwitcher;
