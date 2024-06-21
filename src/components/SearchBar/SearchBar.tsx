// import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
import { useRef, useState } from 'react';

function SearchBar({ onSubmit }: { onSubmit: Function }) {
  const [search, setSearch] = useState('');
  const typingTimeOutRef = useRef(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeSearch = (event: any) => {
    const value = event.target.value;
    setSearch(value);
    // console.log(value);

    if (!onSubmit) return;

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      onSubmit(value ? `search=${value}` : '');
    }, 500);
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
