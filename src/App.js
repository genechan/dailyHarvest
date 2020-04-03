import React from "react";
import { List, SearchBar } from "./components";
import { title, description } from "./constants";
const App = () => {
  return (
    //using semantic HTML5 tags article
    <article>
      <h1>{title}</h1>
      <h4>{description}</h4>
      <SearchBar />
      <List />
    </article>
  );
};
export default App;
