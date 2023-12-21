import React, { useEffect, useMemo, useState } from 'react';
import './health.css';
import { filter } from '@chakra-ui/react';

const url = 'https://jsonplaceholder.typicode.com/todos';

const page = {
  pageSize: 10,
  pageNumber: 1,
};

const HealthPlix = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [tableData, setTableData] = useState([
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
      completed: false,
    },
  ]);

  // call api
  //  save response
  // create table
  // populate table
  // change complete to red

  // implement search bar with title search
  // pagination

    useMemo(() => {
      fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res));
    }, [url]);
    

    useEffect(() => {
      let tempData = data?.slice(
        (page.pageNumber - 1) * page.pageSize,
        page.pageSize
      );
      console.log('tempData', tempData, data);
    }, [page.pageNumber, page.pageSize, data]);

    console.log('tempData', tableData);

  const handleSearch = (e) => {
    let searchText = e.target.value;

    const filteredSearch = tableData.filter(
      (data) => data.title.includes(searchText)
    );

    searchText.length > 0 && setTableData(filteredSearch)
  };

  const getPagination = () => {
    return (
      <div>
        <div>Prev</div>
        <div>{page.pageNumber}</div>
        <div>Next</div>
      </div>
    );
  };

  const getTableHead = () => {
    return (
      <div className={`row`}>
        <div className="row-data">ID</div>
        <div className="row-data">Title</div>
      </div>
    );
  };

  const getTableBody = (tableData) => {
    return (
      <div className="table-body">
        {tableData?.map((data) => (
          <div key={data.id} className={`row ${data.completed ? 'red' : ''}`}>
            <div className="row-data">{data.id}</div>
            <div className="row-data">{data.title}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => handleSearch(e)}
          className="search-input"
        />
      </div>
      <div>{getTableHead}</div>
      <div>{getTableBody(tableData)}</div>;
      <div>{getPagination()}</div>
    </div>
  );
};

export default HealthPlix;
