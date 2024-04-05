import React, { createContext, useContext, useState } from 'react';

const ThemeProvider = createContext();
const ThemeUpdateProvider = createContext();

export const useTheme = () => {
  return useContext(ThemeProvider);
};

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateProvider);
};

// eslint-disable-next-line react/prop-types
const ThemeContext = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    return setDarkTheme(!darkTheme);
  };
  return (
    <ThemeProvider.Provider value={darkTheme}>
      <ThemeUpdateProvider.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateProvider.Provider>
    </ThemeProvider.Provider>
  );
};

export default ThemeContext;
