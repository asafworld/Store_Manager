const { getProducts, getProductsByID } = require('../models/SQLqueries/GETproducts.model');

async function allProductsReturn() {
  const [result] = await getProducts();
  if (result === [] || result === undefined || result === null) {
    return 'ERROR';
  } 
  return result;
}

async function productByIdReturn(id) {
  const [[result]] = await getProductsByID(id);
  if (result === [] || result === undefined || result === null) {
    return 'ERROR';
  }
  return result;
}

module.exports = {
  allProductsReturn,
  productByIdReturn,
};