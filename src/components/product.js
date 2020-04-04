import React from "react";
import { allergyWarning } from "../constants";
const Product = ({
  name = "",
  collection = "",
  ingredient = [],
  allergen = false,
}) => {
  return (
    <div>
      {allergen && <span>{allergyWarning}</span>}
      <p className="productName">{name}</p>
      <p className="collection">{collection}</p>
      <ul className="ingredients">{createIngredientsList(ingredient)}</ul>
    </div>
  );
};
const createIngredientsList = (ingredient) => {
  return ingredient.map((obj) => {
    return <li>{obj.name}</li>;
  });
};

export default Product;
