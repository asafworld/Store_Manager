const { getAllSalesService, getSalesByIdService } = require('../../services/GETsales.service');

async function getAllSalesCallback(_req, res) {
  const serviceAnswer = await getAllSalesService();
  if (serviceAnswer !== 'ERROR') {
    return res.status(200).json(serviceAnswer);
  }
  return res.status(400).json(serviceAnswer);
}

async function getSalesByIdCallback(req, res) {
  const id = Number(req.params.id);
  const serviceAnswer = await getSalesByIdService(id);
  if (serviceAnswer !== 'ERROR') {
    return res.status(200).json(serviceAnswer);
  }
  return res.status(404).json({ message: 'Sale not found' });
}

module.exports = {
  getAllSalesCallback,
  getSalesByIdCallback,
};