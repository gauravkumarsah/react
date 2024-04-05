import React  from 'react';
import { useTheme, useThemeToggle } from './context';

const FunctionalContext = () => {
  const theme = useTheme()
  const toggleTheme = useThemeToggle()


  const themeStyles = {
    backgroundColor: theme ? '#aaa' : '#eee',
    color: theme ? '#eee' : '#aaa',
    padding: '2em',
    margin: '2em',
  };

  return (
    <>
      <button onClick={toggleTheme}>Button</button>
      <div style={themeStyles}>FunctionalContext</div>
    </>
  );
};

export default FunctionalContext;
