import React from "react";
import { allergyWarning } from "../constants";

const Product = ({
  name = "",
  collection = "",
  ingredients = [],
  allergen = false,
}) => {
  //INFO: Using HTML codes &nbsp; some browser may or may not respect the whitespace between html tags
  // HTML codes insures it does.
  return (
    <div className="product">
      {allergen && <span>{allergyWarning}</span>}
      <p className="productName">
        <span className="label">Name:&nbsp;</span> {name}
      </p>
      <p className="collection">
        <span className="label">Collection:&nbsp;</span> {collection}
      </p>
      <p className="label">Ingredients:</p>
      <ul className="ingredients">{createIngredientsList(ingredients)}</ul>
    </div>
  );
};

export const createIngredientsList = (ingredients) => {
  return ingredients.map((obj) => {
    return <li>{obj.name}</li>;
  });
};

export default Product;
