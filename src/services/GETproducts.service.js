const { getProducts, getProductsByID } = require('../models/SQLqueries/GETproducts.model');

async function allProductsReturn() {
  const [result] = await getProducts();
  if (result) {
    return result;
  } 
  return 'ERROR';
}

async function productByIdReturn(id) {
  const [[result]] = await getProductsByID(id);
  if (result) {
    return result;
  }
  return 'ERROR';
}

module.exports = {
  allProductsReturn,
  productByIdReturn,
};