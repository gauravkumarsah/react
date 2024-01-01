import React from 'react';
import { arrayData } from './constants';

const Sosuv = () => {

  const dict = ['I', 'am', 'going'];

  const sentence =
    'I am going to Bangalore via Mysore and coming back to Bangalore';
  const allWords = sentence.split(' ');

  const canFormDictionary = () => {
    const set = new set();
    console.log('Sosuv', set);

    allWords.forEach((word) => {
      if (dict.indexOf(word) === -1) {
        return false;
      } else {
        return true;
      }
    });
  };

  canFormDictionary();

  const getRoles = (roles) => {
    const removeAccess = () => {
      // setShowSuperviserView(true);
    };

    const allRoles = roles.map((role) => (
      <div key={role}>
        <div>{role}</div>
        <button onClick={(role) => removeAccess(role)}>Remove Access</button>
      </div>
    ));

    return allRoles;
  };
  const getTable = () => {
    return arrayData.map((row) => (
      <div key={row}>
        <div>{row.key}</div>
        <div>{row.source.join('')}</div>
        <div>{getRoles(row.roles)}</div>
      </div>
    ));
  };

  return <div>{getTable()}</div>;
};

export default Sosuv;
