// import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
import { useState } from 'react';

function SearchBar() {
  const [search, setSearch] = useState();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeSearch = (event: any) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const searchKeyDown = (event: any) => {
  //     if (event.key === 'Enter') {
  //       props.changeHandleSearch(search);
  //     }
  //   };
  return (
    <div className='search'>
      <div className='searchInput'>
        <input
          type='text'
          placeholder='Search'
          onChange={changeSearch}
          //   onKeyDown={searchKeyDown}
          value={search}
        />
        <div className='searchIcon'>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
