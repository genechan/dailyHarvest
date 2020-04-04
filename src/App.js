// thrid party imports
import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

//App imports
import { List, SearchBar } from "./components";
import { title, description, MAX_INPUT } from "./constants";
import { USER_INPUT } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const userInput = useSelector((state) => state.userInput);
  const list = useSelector((state) => state.list);
  return (
    //using semantic HTML5 tags article
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
      <SearchBar value={userInput} onChange={onChangeUserInput(dispatch)} />
      <List items={list} />
    </article>
  );
};
//INFO: export for unit test
export const onChangeUserInput = (dispatch) => {
  return (e) => {
    if (e.target.value.trim().length > MAX_INPUT) {
      dispatch({
        type: USER_INPUT,
        payload: "",
      });
    } else {
      dispatch({ type: USER_INPUT, payload: e.target.value.trim() });
    }
  };
};
export default App;
