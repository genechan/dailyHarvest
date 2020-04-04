import React from "react";
import { allergyWarning } from "../constants";
const Product = ({
  name = "",
  collection = "",
  ingredient_ids = [],
  allergen = false,
}) => {
  return (
    <div>
      {allergen && <span>{allergyWarning}</span>}
      <p className="productName">{name}</p>
      <p className="collection">{collection}</p>

      {createIngredientsList(ingredient_ids)}
    </div>
  );
};
const createIngredientsList = (ingredient_ids) => {
  return <ul className="ingredients"></ul>;
};

export default Product;
