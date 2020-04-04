export const searchProductList = (ingredientPattern, ingredients, products) => {
  const ingredientList = findIngredients(ingredientPattern, ingredients);
  const ingredientIds = getIds(ingredientList);
  return findProducts(ingredients, ingredientIds, products);
};

export const findIngredients = (pattern = "", ingredients = []) => {
  const regex = RegExp(pattern.toLowerCase());
  return ingredients.filter(({ name }) => {
    return regex.test(name);
  });
};

export const getIds = (array) => {
  return array.map(({ id }) => id);
};

export const findProducts = (ingredients, selectedIds = [], products) => {
  const matchedProducts = products.filter(({ ingredient_ids }) => {
    const matchIds = arrayIntersection(ingredient_ids, selectedIds);
    return matchIds.length > 0;
  });
  return sanitizeProducts(matchedProducts, ingredients);
};

export const arrayIntersection = (array1, array2) => {
  return array1.filter((id) => {
    return array2.includes(id);
  });
};

export const sanitizeProducts = (rawProducts, ingredients) => {
  return rawProducts.map((product) => {
    return {
      ...product,
      ingredient_ids: createIngredients(product.ingredient_ids, ingredients),
    };
  });
};

export const createIngredients = (ids, ingredients) => {
  return ingredients.filter(({ id }) => {
    return ids.includes(id);
  });
};
