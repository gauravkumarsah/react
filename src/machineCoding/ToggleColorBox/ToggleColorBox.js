import React, { useEffect, useRef, useState } from 'react';
import './style.css';

function ToggleColorBox() {
  const [selected, setSelected] = useState([]);
  let intervalId = useRef(0);

  const handleBoxClick = (index) => {
    let temp = [...selected];
    temp.push(index);
    setSelected(temp);
    if (temp.length === 7) {
      intervalId.current = setInterval(() => {
        temp = temp.slice(1);
        setSelected(temp);
      }, 1000);
    }
  };

  const getBoxes = () => {
    let divs = [];
    for (let i = 0; i < 9; i++) {
      if (i !== 4 && i !== 5) {
        divs.push(
          <div
            className="box"
            onClick={() => handleBoxClick(i)}
            style={{ background: selected?.includes(i) ? ' green' : '' }}
          ></div>
        );
      } else {
        divs.push(<div className=""></div>);
      }
    }

    return <div className="box-container">{divs}</div>;
  };

  useEffect(() => {
    if (selected.length === 0 && intervalId) {
      clearInterval(intervalId.current);
    }
  }, [selected]);
  console.log('selected', selected);

  return <div className="box-container">{getBoxes()}</div>;
}

export default ToggleColorBox;
