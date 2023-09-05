import { useState, useEffect } from "react";

const useI18n = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("FR");
  const [strings, setStrings] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const loadStrings = async () => {
      const loadedStrings = await import(
        `../public/i18n/${currentLanguage}.json`
      );
      setStrings(loadedStrings.default);
    };

    loadStrings();
  }, [currentLanguage]);

  const setLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  const _string = (key: string, ...params: string[]): string => {
    const text = strings[key] || key;
    return text.replace(
      /{{(\d+)}}/g,
      (_, index) => params[Number(index)] || ""
    );
  };

  return {
    locale: currentLanguage,
    _string,
    setLanguage,
  };
};

export default useI18n;
