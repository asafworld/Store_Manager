const connection = require('../connection');

async function getSales() {
  const [sales] = await connection.execute(
    `SELECT s.id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp ON s.id = sp.sale_id
    ORDER BY s.id ASC;;`,
  );
  return sales;
}

async function getSalesById(id) {
  const [sales] = await connection.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity
      FROM StoreManager.sales AS s
      INNER JOIN StoreManager.sales_products AS sp ON s.id = sp.sale_id
      WHERE s.id = ?
      ORDER BY s.id ASC;`, [id],
  );
  return sales;
}

async function getSalesInfo() {
  const [allSales] = await connection.execute(
    'SELECT * FROM StoreManager.sales',
  );
  return allSales;
}

module.exports = {
  getSales,
  getSalesById,
  getSalesInfo,
};