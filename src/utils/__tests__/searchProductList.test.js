import { searchProductList } from "../../utils";
import { ingredients } from "../../data/ingredients";
import { products } from "../../data/products";

describe("Testing function 'searchProductList' ", () => {
  it("returns empty array if arguments are bad", () => {
    expect(searchProductList("", [], [])).toHaveLength(0);
  });
});
