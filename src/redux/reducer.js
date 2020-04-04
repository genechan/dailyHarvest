import { USER_INPUT } from "./actions";
import { searchProductList } from "../utils";
import { ingredients } from "../data/ingredients";
import { products } from "../data/products";

const defaultState = { userInput: "", list: [] };
const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_INPUT:
      if (payload.trim() === "") {
        return { ...defaultState };
      }
      return {
        userInput: payload,
        list: searchProductList(payload, ingredients, products),
      };
    default:
      return { ...state };
  }
};

export default reducer;
