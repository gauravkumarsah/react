import React, { useState } from 'react';

const IBM = () => {
  let list = [10, 2, 2, 4, 5,8, 4, 2, 6, 1, 0, 4, 6, 7, 7];

  const getSecondLargest = () => {
    let la = list[0];
    let sec = 0;

    for (let i = 1; i < list.length; i++) {
      if (list[i] > la) {
        sec = la;
        la = list[i];
      }else if(list[i] > sec && list[i] < la) {
        sec = list[i];
      }
    }
    return sec;
  };

  console.log(getSecondLargest());

  return <div>IBM</div>;
};

export default IBM;

// Output: [ { name: 'unconfigured', value: 0 }, { name: 'lights', value: 1 }, { name: 'CCT', value: 2 }, { name: 'shades', value: 3 } ]
