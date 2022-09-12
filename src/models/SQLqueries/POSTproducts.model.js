const connection = require('../connection');

async function postProduct(name) {
  const result = await connection.execute(
    `INSERT INTO StoreManager.products (name) VALUES
    (?);`, [name],
  );
  return result;
}

module.exports = {
  postProduct,
};