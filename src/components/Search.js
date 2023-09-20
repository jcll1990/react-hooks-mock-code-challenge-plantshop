import React from "react";


function Search({setSearch}) {

  function handleChange(event) {
    setSearch(event.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        onChange={handleChange}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        
      />
    </div>
  );
}

export default Search;
