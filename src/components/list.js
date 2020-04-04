import React from "react";
import Product from "./product";

const List = ({ items = [] }) => {
  const list = createProductList(items);
  return (
    <>
      <h3>Here are the products that contains your ingredients</h3>
      <ul>{list}</ul>
    </>
  );
};
export const createProductList = (items) => {
  return items.map(({ name, collection, ingredient, allergen }) => {
    return (
      <li>
        <Product
          name={name}
          collection={collection}
          ingredient={ingredient}
          allergen={allergen}
        />
      </li>
    );
  });
};
export default List;
