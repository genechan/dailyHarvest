import { USER_INPUT } from "./actions";
import { searchProductList } from "../utils";
import { ingredients } from "../data/ingredients";
import { products } from "../data/products";

const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case USER_INPUT:
      return {
        userInput: payload,
        list: searchProductList(payload, ingredients, products),
      };
    default:
      return { ...state };
  }
};

export default reducer;
