import React from "react";
import { useAppContext } from "../util/context";

const Search = (e) => {
  const { query, handleSearch } = useAppContext();
  return (
    <form className="search" onSubmit={(e) => e.preventDefault}>
      <h2>Search Hacker News</h2>
      <input
        type="text"
        className="search-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default Search;
