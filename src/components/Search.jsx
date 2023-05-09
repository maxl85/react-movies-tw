import React from 'react';
import { Input } from 'antd';


const { Search } = Input;

const _Search = (props) => {
  
  const { searchMovies } = props;

  const onSearch = (e) => {
    if (e !== '') {
      searchMovies(e)
    }
  };

  return (
    <>
      <Search className='pt-5 pb-10' placeholder="Поиск фильма ..." allowClear onSearch={onSearch} />
    </>
  );
};

export default _Search;