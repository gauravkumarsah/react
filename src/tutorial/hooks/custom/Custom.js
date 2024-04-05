/* eslint-disable no-unused-vars */
import React from 'react';
import useLocalStorage from './useLocalStorage';

const Custom = () => {
  const [name, setName] = useLocalStorage('name', '');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default Custom;
