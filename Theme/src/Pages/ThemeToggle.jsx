import { Button } from "@mantine/core";
import { useTheme } from "../ThemeContext";

const ThemeToggle= () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} variant="outline" color={theme === "light" ? "dark" : "yellow"}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};

export default ThemeToggle;
