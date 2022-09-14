const connection = require('../connection');

async function updateProduct(name, id) {
  const [update] = await connection.execute(
    `UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?`, [name, id],
  );
  return update;
}

module.exports = updateProduct;