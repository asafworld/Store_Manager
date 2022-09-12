const { postProductReturn } = require('../../services/POSTproducts.service');
const { getProducts } = require('../../models/SQLqueries/GETproducts.model');

async function postProductCallback(req, res) {
  const { name } = req.body;
  const result = await postProductReturn(name);
  if (result === 'ERROR') {
    return res.status(400).json({ message: 'Ocorreu um erro' });
  }
  const [products] = await getProducts();
  const lastID = products[products.length - 1];
  return res.status(201).json({
    id: lastID.id,
    name,
  });
}

module.exports = {
  postProductCallback,
};