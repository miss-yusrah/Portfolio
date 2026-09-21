import { FiMoon, FiSun } from "react-icons/fi";
import { useThemeContext } from "../ThemeProvider";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className = "" }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center size-9 rounded-md border border-line text-ink hover:border-ink/40 transition-colors ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
    >
      {isDark ? <FiSun className="size-4" /> : <FiMoon className="size-4" />}
    </button>
  );
};

export default ThemeToggle;
