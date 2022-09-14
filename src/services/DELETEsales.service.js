const { deleteSalesfromSales,
  deleteSalesfromSalesProducts } = require('../models/SQLqueries/DELETEsales.model');

async function deleteSalesService(id) {
  const fromSales = await deleteSalesfromSales(id);
  if (fromSales.affectedRows >= 1) {
    const fromSalesProducts = await deleteSalesfromSalesProducts(id);
    if (fromSalesProducts.affectedRows >= 1) {
      return true;
    }
  }
  return 'ERROR';
}

module.exports = { deleteSalesService };