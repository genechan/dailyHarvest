import React from "react";
import Product from "./product";

const List = ({ items = [] }) => {
  const list = createProductList(items);
  return (
    <div className="list">
      <h3>Here are the products that contains your ingredients</h3>
      <ul>{list}</ul>
    </div>
  );
};

export const createProductList = (items) => {
  return items.map(({ name, collection, ingredients, allergen }) => {
    return (
      <li>
        <Product
          name={name}
          collection={collection}
          ingredients={ingredients}
          allergen={allergen}
        />
      </li>
    );
  });
};

export default List;
