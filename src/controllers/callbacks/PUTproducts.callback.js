const updateProductsService = require('../../services/PUTproducts.service');

async function updateProductsCallback(req, res) {
  const id = Number(req.params.id);
  const { name } = req.body;
  const serviceAnswer = await updateProductsService(name, id);
  if (serviceAnswer === true) {
    return res.status(200).json({
      id,
      name,
    });
  }
}

module.exports = updateProductsCallback;