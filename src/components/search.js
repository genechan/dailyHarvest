import React from "react";
import { searchText } from "../constants";

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="search">{searchText}</label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter here"
        autoComplete="false"
      />
    </div>
  );
};

export default SearchBar;
