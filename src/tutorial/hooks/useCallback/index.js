import React, {  useCallback, useState } from 'react';
import List from './List';

export default function UseCallback() {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState(false);

 

  const handleThemeChange = () => {
    setTheme((theme) => !theme);
  };

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  return (
    <div style={{ background: theme ? '#333' : '', padding: '3em' }}>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <button onClick={handleThemeChange}>Change Theme</button>
      <List getItems={getItems} />
    </div>
  );
}
