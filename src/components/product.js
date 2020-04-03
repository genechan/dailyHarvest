import React from "react";

const Product = ({
  name = "",
  collection = "",
  ingredient_ids = [],
  allergen = false,
}) => {
  return (
    <div>
      {allergen && <span>* Allergy Warring</span>}
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
