//INFO: `searchProductList` is the main function to be used in this file
export const searchProductList = (ingredientPattern, ingredients, products) => {
  const ingredientList = findIngredients(ingredientPattern, ingredients);
  const ingredientIds = getIds(ingredientList);
  return findProducts(ingredients, ingredientIds, products);
};

//INFO: These utils function that support the main `searchProductList` are exported for
// unit test. Breaking big problems to small ones. Also easier to reuse else where.
export const findIngredients = (pattern = "", ingredients = []) => {
  const searchList = pattern
    .split(",")
    .map((string) => string.trim().toLowerCase())
    .filter((string) => string && string.length);
  return ingredients.filter(({ name }) => {
    return testName(name, searchList);
  });
};

export const testName = (name, list) => {
  for (let i = 0; i < list.length; i++) {
    const regex = RegExp(list[i]);
    if (regex.test(name.toLowerCase())) {
      return true;
    }
  }
  return false;
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

export const arrayIntersection = (
  array1,
  array2,
  getField = (value) => value
) => {
  return array1.filter((obj) => {
    const value = getField(obj);
    return array2.includes(value);
  });
};

export const sanitizeProducts = (rawProducts, ingredients) => {
  return rawProducts.map((product) => {
    const getField = ({ id }) => id;
    return {
      ...product,
      ingredients: arrayIntersection(
        ingredients,
        product.ingredient_ids,
        getField
      ),
    };
  });
};
