/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styles from './traffic.module.css';

const lightData = {
  red: {
    wait: 4000,
    nextActive: 'green',
  },
  green: {
    wait: 3000,
    nextActive: 'yellow',
  },
  yellow: {
    wait: 500,
    nextActive: 'red',
  },
};

const Trffic = () => {
  const [currentActiveLight, setCurrentActiveLight] = useState('red');

  useEffect(() => {
    setTimeout(() => {
      setCurrentActiveLight(lightData[currentActiveLight].nextActive);
    }, lightData[currentActiveLight].wait);
  }, [currentActiveLight]);

  return (
    <div className={styles.lightContainer}>
      <div
        className={`${styles.light} ${
          currentActiveLight === 'red' ? styles.red : ''
        }`}
      ></div>
      <div
        className={`${styles.light} ${
          currentActiveLight === 'green' && styles.green
        }`}
      ></div>
      <div
        className={`${styles.light} ${
          currentActiveLight === 'yellow' && styles.yellow
        }`}
      ></div>
    </div>
  );
};

export default Trffic;
