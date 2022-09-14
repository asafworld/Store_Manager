const updateProduct = require('../models/SQLqueries/PUTproducts.model');

async function updateProductsService(name, id) {
  const updateReturn = await updateProduct(name, id);
  if (updateReturn.affectedRows > 1 || updateReturn.affectedRows < 0) {
    return 'ERROR';
  }
  return true;
}

module.exports = updateProductsService;