import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input 
        className='pa3 ba b--blue bg-lightest-blue'
        type='searchbox' 
        placeholder='search robots here'
        onChange={searchChange}
      />
    </div>
   
  );
}

export default SearchBox