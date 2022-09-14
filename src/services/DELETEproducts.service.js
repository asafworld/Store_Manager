const { deleteProducts } = require('../models/SQLqueries/DELETEproducts.model');

async function deleteProductsService(id) {
  const deleteReturn = await deleteProducts(id);
  if (deleteReturn.affectedRows > 1 || deleteReturn.affectedRows < 1) {
    console.log('SERVICE-----> error');
    return 'ERROR';
  }
  console.log('SERVICE----->', true);
  return true;
}

module.exports = { deleteProductsService };