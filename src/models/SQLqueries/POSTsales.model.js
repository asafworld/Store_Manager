const connection = require('../connection');

async function postSales(saleId, productId, quantity) {
  const salesInsert = connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) 
    VALUES (?,?,?)`, [saleId, productId, quantity],
  );
  return salesInsert;
}

async function postSalesDate(saleId) {
  const salesDateInsert = connection.execute(
    `INSERT INTO StoreManager.sales (id, date)
    VALUES (?, CURRENT_TIMESTAMP)`, [saleId],
  );
  return salesDateInsert;
}

module.exports = {
  postSales,
  postSalesDate,
};