import React from 'react';
import FunctionalContext from './FunctionalContext';
import Context from './context';

const Component = () => {
  return (
    <Context>
      <FunctionalContext />
    </Context>
  );
};

export default Component;
