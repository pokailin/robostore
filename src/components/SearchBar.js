import React from 'react';
import './css/SearchBar.css';

const SearchBar = ({searchChange}) => {
    return (
        <div>
            <hr/>
            <input 
                type="search" 
                placeholder="Enter bot model or type" 
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBar;