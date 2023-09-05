import { FC } from "react";
import useI18n from "../../hooks/useI18n";

const SwitchLang: FC = () => {
  const { setLanguage } = useI18n();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("fr")}>🇫🇷</button>
      <button onClick={() => handleLanguageChange("en")}>🇬🇧</button>
    </div>
  );
};

export default SwitchLang;
