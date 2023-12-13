import React from 'react';
import './info.css';
import { data } from './constant';

const Main = () => {
  return (
    <div className="main">
      <div className="text-body">
        <div className="text-body-header">Fun facts about React</div>
        {data.map((text) => (
          <div key={text.id} className="data">
            <span className="span-circle"></span>
            <div className="data-text">{text.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
