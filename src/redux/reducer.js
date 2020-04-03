const reducer = (state = { test: "foobar" }, { type, payload }) => {
  return { ...state };
};

export default reducer;
