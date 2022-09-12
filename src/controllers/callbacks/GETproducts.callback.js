const { allProductsReturn, productByIdReturn } = require('../../services/GETproducts.service');

async function products(_req, res) {
  const productsReturn = await allProductsReturn();
  if (productsReturn !== 'ERROR') {
    return res.status(200).json(productsReturn);
  }
  return res.status(404).json({ message: 'No products found' });
}

async function idProduct(req, res) {
  const id = Number(req.params.id);
  const productReturn = await productByIdReturn(id);
  if (productReturn !== 'ERROR') {
    return res.status(200).json(productReturn);
  }
  return res.status(404).json({ message: 'Product not found' });
}

module.exports = {
  products,
  idProduct,
};