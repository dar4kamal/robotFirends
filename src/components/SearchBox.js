import React from 'react'

const SearchBox = ({ searchChange }) => {
    return (
        <div>
            <input 
                className="ba b--black-20 pa2 mb2"
                type="text"
                placeholder="Enter robot Name "
                onChange = {searchChange}   
            />
        </div>
    );
};

export default SearchBox;