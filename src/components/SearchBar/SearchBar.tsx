// import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'

function SearchBar() {
    return (
        <div className='search'>
            <div className='searchInput'>
                <input type='text' placeholder='Search' />
                <div className='searchIcon'> 
                    <SearchIcon/>
                </div>   
            </div>
        </div>
    );
}

export default SearchBar;