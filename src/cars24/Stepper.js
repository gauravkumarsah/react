/* eslint-disable react/prop-types */
import React from 'react';
import styles from './index.module.css';

const Stepper = ({ currentStep, totalStep }) => {
  const totalSteps = Array(totalStep).fill(1);

  console.log(totalSteps, totalStep, currentStep);
  return (
    <div className={styles.stepContainer}>
      {totalSteps.map((step, index) => {
        return (
          <div className={styles.textContainer} key={index + 1}>
            <div
              className={`${styles.steps} ${
                index + 1 === currentStep && styles.currentStep
              }
            
            ${index + 1 < currentStep && styles.stepCompleted}`}
            >
              {index + 1}
            </div>
            <span>{`Step ${index + 1}`}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
