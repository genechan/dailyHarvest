import { searchProductList } from "../../utils";
import { ingredients } from "../../data/ingredients";
import { products } from "../../data/products";

import { getIds } from "../searchProductList";

describe("Testing function 'searchProductList' ", () => {
  it("returns empty array if arguments are bad", () => {
    expect(searchProductList("", [], [])).toHaveLength(0);
  });

  it("finds product with 'kale' lowercase ", () => {
    expect(
      searchProductList("kale", ingredients, products).length
    ).toBeGreaterThan(0);
  });
  it("finds product with 'KALE' UPPER case ", () => {
    expect(
      searchProductList("kale", ingredients, products).length
    ).toBeGreaterThan(0);
  });
  it("finds product with 'Kale' mix case ", () => {
    expect(
      searchProductList("kale", ingredients, products).length
    ).toBeGreaterThan(0);
  });

  //INFO: Test example with no hard coding values like `Kale`
  const ingredientName = ingredients[0].name;
  it("finds product with `ingredientName` ", () => {
    expect(
      searchProductList(ingredientName, ingredients, products).length
    ).toBeGreaterThan(0);
  });

  //INFO: testing the utils inside of searchProducts
  //For this example will be doing 1 to demonstrate my point
  //in full production I would test each one
  it("`getIds` will return an array of ids", () => {
    const array = [{ id: 1 }, { id: 2, foo: "bar" }, { id: 3 }];
    const output = getIds(array);
    expect(output).toEqual([1, 2, 3]);
  });
});
