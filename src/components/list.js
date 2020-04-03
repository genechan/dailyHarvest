import React from "react";
import Product from "./product";

const List = ({ list }) => {
  return (
    <>
      <h3>Here are the products that contains your ingredients</h3>
      <ul>
        <li>
          <Product
            name="name"
            collection="collection"
            ingredient_ids={[1, 2, 3]}
            allergen={true}
          />
        </li>
        <li>
          <Product
            name="name1"
            collection="collection1"
            ingredient_ids={[1, 2, 3]}
            allergen={false}
          />
        </li>
      </ul>
    </>
  );
};

export default List;
