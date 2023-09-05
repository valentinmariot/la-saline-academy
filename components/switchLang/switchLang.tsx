import { FC } from "react";
import useI18n from "../../hooks/useI18n";

const SwitchLang: FC = () => {
  const { setLanguage } = useI18n();

  const handleLanguageChange = (lang: string) => {
    console.log("lang", lang);
    setLanguage(lang);
  };

  return (
    <div>
      <button onClick={() => handleLanguageChange("FR")}>🇫🇷</button>
      <button onClick={() => handleLanguageChange("EN")}>🇬🇧</button>
    </div>
  );
};

export default SwitchLang;
