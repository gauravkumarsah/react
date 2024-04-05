import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const ThemeToggleContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const useThemeToggle = () => {
  return useContext(ThemeToggleContext)
}
// eslint-disable-next-line react/prop-types
const Context = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeToggleContext.Provider value={toggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Context;
