import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.getElementById('root').classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    // Switch theme
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    // Update root class to toggle dark mode
    document.getElementById('root').classList.remove(theme);
    document.getElementById('root').classList.add(newTheme);

    // Save theme preference in localStorage
    localStorage.setItem('theme', newTheme);
  }

  return (

     


 <header className="w-full bg-primary border-b border-primary px-2 sticky top-0 py-4 shadow-themed-md">
          <div className="flex justify-between w-full mx-2 ">
            <h1 className="text-2xl font-bold text-primary">Theme Toggle Demo</h1>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-secondary">
                Current theme: <span className="font-semibold text-brand">{theme}</span>
              </span>
              
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                <span className="theme-label sun">☀</span>
                <span className="theme-label moon">🌙</span>
                <div className={`theme-slider ${theme === 'dark' ? 'dark' : ''}`}>
                  <i className={`fi ${theme === 'light' ? 'fi-br-brightness' : 'fi-br-moon'} theme-icon`}></i>
                </div>
              </button>
            </div>
          </div>
        </header>


  )
}

export default Hero;
