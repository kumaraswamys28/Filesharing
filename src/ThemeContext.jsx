import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Create the Context
const ThemeContext = createContext();

// 2. Create the Provider component
export function ThemeProvider({ children }) {
  // Set up the state, reading from localStorage for persistence
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Default to 'light' if nothing is saved
    return savedTheme || "light";
  });

  // This effect runs on initial load
  useEffect(() => {
    const root = document.documentElement; // This is the <html> tag
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // We only want this to run when the theme state loads
  }, [theme]); 

  // This is the function the button will call
  const toggleTheme = () => {
    // Determine the new theme
    const newTheme = theme === "light" ? "dark" : "light";
    
    // Update the state
    setTheme(newTheme);

    // Update localStorage
    localStorage.setItem("theme", newTheme);

    // Update the <html> tag class
    const root = document.documentElement;
    root.classList.remove(theme); // Remove the old theme class
    root.classList.add(newTheme);  // Add the new theme class
  };

  // The value to be passed to consuming components
  // We pass BOTH the current theme and the function to change it
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// 3. Create a custom hook for easy access
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}