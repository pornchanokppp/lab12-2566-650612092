import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";
import { LangContext } from "@/contexts/LangContext";

export const Detail = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  const ThemeStatus =
    theme.name === "dark"
      ? lang.detail.darkActivated
      : lang.detail.lightActivated;
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {ThemeStatus}
      {/* Display activated theme message here (EN or TH) */}
      {/* tip: Get information from "theme" variable to determine 
      which theme is currently selected */}
    </p>
  );
};
