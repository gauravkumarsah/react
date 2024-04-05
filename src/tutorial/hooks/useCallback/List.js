import React, { useEffect, useState } from 'react';

const List = ({ getItems }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems());
    console.log('theme', getItems());
  }, [getItems]);

  return items.map((item, idx) => <div key={idx}>{item}</div>);
};

export default List;
