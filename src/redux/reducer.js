import { USER_INPUT } from "./actions";

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_INPUT:
      return { userInput: payload };
    default:
      return { ...state };
  }
};

export default reducer;
