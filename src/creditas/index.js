import React from 'react';

const Test = () => {
  const matrix = [[], [], [], []];
  const n = 4;
  let start = 0;
  let end = 4;
  let i = 0;
  let j = 0;
  let count = 0;

  const fillRowSE = (start) => {
    if (i < n) {
      for (let j = start; j < n; j++) {
        matrix[i][j] = count;
        count++;
      }
      i++;
      fillRowES(j);
    }
  };
  const fillRowES = (end) => {
    if (i < n) {
      for (let j = end; j >= 0; j--) {
        matrix[i][j] = count;
        count++;
      }
      i++;
      fillRowSE(j);
    }
  };

  fillRowSE();

  console.log(matrix);
  return <div>Test</div>;
};

export default Test;
