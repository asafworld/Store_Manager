const connection = require('../connection');

async function getProducts() {
  const products = await connection.execute('SELECT * FROM StoreManager.products');
  return products;
}

async function getProductsByID(id) {
  const product = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return product;
}

module.exports = {
  getProducts,
  getProductsByID,
};