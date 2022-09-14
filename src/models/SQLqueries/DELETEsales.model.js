const connection = require('../connection');

async function deleteSalesfromSales(id) {
  const [fromSales] = await connection.execute(
    `DELETE FROM StoreManager.sales
    WHERE id = ?`, [id],
  );
  return fromSales;
}

async function deleteSalesfromSalesProducts(id) {
  const [fromSales] = await connection.execute(
    `DELETE FROM StoreManager.sales_products
    WHERE sale_id = ?`, [id],
  );
  return fromSales;
}

module.exports = {
  deleteSalesfromSales,
  deleteSalesfromSalesProducts,
};