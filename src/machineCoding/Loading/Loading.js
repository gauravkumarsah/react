import React, { useEffect, useRef, useState } from 'react';

function Loading() {
  const [charge, setCharge] = useState(0);
  let intervalId = useRef(0);

  const handleStart = () => {
    if (charge >= 100 ) {
      clearInterval(intervalId.current);
    }else {

        intervalId.current = setInterval(() => {
            setCharge((prevCharge) => prevCharge + 10);
        }, 200);
    }
  };

  useEffect(() => {
    if (charge >= 100) {
      clearInterval(intervalId.current);
    }
  }, [charge]);

  return (
    <>
      <div>Loading</div>
      <div style={{ border: '1px solid green', width: `50%` }}>
        <div style={{ background: 'green', width: `${charge}%` }}>{charge}</div>
      </div>
      <button type="button" onClick={handleStart}>
        Start Charging
      </button>
    </>
  );
}

export default Loading;
