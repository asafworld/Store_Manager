const { getSales, getSalesById } = require('../models/SQLqueries/GETsales.model');

async function getAllSalesService() {
  const sales = await getSales();
  if (sales.length > 0) {
    return sales;
  }
  return 'ERROR';
}

async function getSalesByIdService(id) {
  const salesById = await getSalesById(id);
  if (salesById.length > 0) {
    return salesById;
  }
  return 'ERROR';
}

module.exports = {
  getAllSalesService,
  getSalesByIdService,
};