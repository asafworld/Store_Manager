const connection = require('../connection');

async function deleteProducts(id) {
  const [deleteProduct] = await connection.execute(
    `DELETE FROM StoreManager.products
    WHERE id = ?`, [id],
  );
  console.log('MODEL ----->', deleteProduct);
  return deleteProduct;
}

module.exports = {
  deleteProducts,
};