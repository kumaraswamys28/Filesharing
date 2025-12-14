import { useTheme } from "../ThemeContext";

const Hero = () => {

  const { theme, toggleTheme } = useTheme();


  return (
    <header className="w-full bg-primary border-b z-50 border-primary px-2 sticky top-0 py-4 shadow-themed-md">
      <div className="flex justify-between w-full mx-2 ">
        <h1 className="text-2xl font-bold text-primary">ShareBin</h1>

        <div className="flex items-center gap-4">
          <span className="text-sm text-secondary">
            Current theme:{" "}
            <span className="font-semibold text-brand">{theme}</span>
          </span>

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            <span className="theme-label sun"></span>
            <span className="theme-label moon"></span>
            <div className={`theme-slider ${theme === "dark" ? "dark" : ""}`}>
              <i
                className={`fi ${
                  theme === "light" ? "fi-br-brightness" : "fi-br-moon"
                } theme-icon`}
              ></i>
            </div>
          </button>
        </div>
      </div>
    </header>




  );
};

export default Hero;
