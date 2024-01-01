// Task list question

// export const data = [{
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 3,
//     "title": "fugiat veniam minus",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 4,
//     "title": "et porro tempora",
//     "completed": true
//   },
//   {
//     "userId": 1,
//     "id": 5,
//     "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     "completed": false
//   },
//   {
//     "userId": 1,
//     "id": 6,
//     "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//     "completed": false
//   }]



import React, { useEffect, useState } from 'react';
import { data } from './constant';

const Digit = () => {
  const [dataSet, setDataSet] = useState(data);

  const getTable = () => {
    return data.map((data) => {
      <div className="" key={data.id}>
        <div className="">{data.title}</div>
        <div className="">
          <div className="">V</div>
          <div className="">X</div>
        </div>
      </div>;
    });
  };


  return <div>
    {getTable()}
  </div>;
};

export default Digit;
