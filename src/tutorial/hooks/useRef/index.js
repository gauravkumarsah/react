import React, { useEffect, useRef, useState } from 'react';

const UseRef = () => {
  const [name, setName] = useState('');
  const ref = useRef(0)

  useEffect(() => {
    ref.current++
  })
  
  console.log('rendered', name, ref.current);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  );
};

export default UseRef;
