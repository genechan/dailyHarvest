import React from "react";
import { searchText } from "../constants";

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <label htmlfor="search">{searchText}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBar;
