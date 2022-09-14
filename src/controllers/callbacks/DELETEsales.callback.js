const { deleteSalesService } = require('../../services/DELETEsales.service');

async function deleteSalesCallback(req, res) {
  const id = Number(req.params.id);
  const serviceAnswer = await deleteSalesService(id);
  if (serviceAnswer) {
    return res.status(204).end();
  }
}

module.exports = { deleteSalesCallback };
