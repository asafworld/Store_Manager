const connection = require('../connection');

async function getId() {
  const [id] = await connection.execute(
    'SELECT id FROM StoreManager.sales',
  );
  return id;
}

async function getProductId() {
  const [id] = await connection.execute(
    'SELECT id FROM StoreManager.products',
  );
  return id;
}

module.exports = {
  getId,
  getProductId,
};