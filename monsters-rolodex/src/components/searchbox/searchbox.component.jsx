import React from "react";

import './search-box.styles.css';

export const SearchBox = ({placeholder,handleChange} ) => (
    <input className="search"
        type='search'
        placeholder={placeholder}
        onChange={handleChange} />
)

//use functional component when we dont need access to states