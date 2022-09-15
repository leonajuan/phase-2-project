import React, { useState } from "react";

function SearchBar({ filterUsers }) {

  const [searchText, setSearchText] = useState("")

  function handleChange(e) {
    setSearchText(e.target.value)
    filterUsers(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Users:</label>
      <input
        type="text"
        id="search"
        placeholder="Type to search..."
        value={searchText}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar;