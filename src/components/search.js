import React from "react";
import { searchText } from "../constants";

const SearchBar = () => {
  return (
    <div>
      <label htmlfor="search">{searchText}</label>
      <input id="search" type="text" />
    </div>
  );
};

export default SearchBar;
