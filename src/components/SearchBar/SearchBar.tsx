// import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';
import { useRef, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
function SearchBar({ onSubmit }: { onSubmit: Function }) {
  const [search, setSearch] = useState('');
  const typingTimeOutRef = useRef(0);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeSearch = (event: any) => {
    const value = event.target.value;
    setSearch(value);

    if (!onSubmit) return;

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      onSubmit(value ? `search=${value}` : '');
    }, 500);
  };

  return (
    <div className='search'>
      <div className='searchInput'>
        <input
          className='input'
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
