const { deleteProductsService } = require('../../services/DELETEproducts.service');

async function deleteProductsCallback(req, res) {
  const id = Number(req.params.id);
  const serviceAnswer = await deleteProductsService(id);
  console.log('CALLBACK ---->', serviceAnswer);
  if (serviceAnswer) {
    return res.status(204).end();
  }
}

module.exports = { deleteProductsCallback };