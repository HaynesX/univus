// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';
import { lightTheme, darkTheme } from './themes';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true); // Default mode is dark

  // Toggle between light and dark themes
  const toggleTheme = (mode) => {

    if (mode === 'light') {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: isDark ? darkTheme : lightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
