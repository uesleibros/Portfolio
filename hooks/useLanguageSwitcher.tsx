import { useState, useEffect } from "react";

function useLanguageSwitcher() {
  const [language, setLanguage] = useState<string | null>(null);

  function changeLanguage(labelType: string) {
    if (labelType && labelType.startsWith("language-")) {
      const newLanguage = labelType.replace("language-", "").trim();
      setLanguage(newLanguage.toLowerCase());
      localStorage.setItem("language", newLanguage);
    }
  };

  function updateLanguage() {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage)
      changeLanguage("language-" + storedLanguage);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateLanguage();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return { language, changeLanguage, updateLanguage };
};

export default useLanguageSwitcher;