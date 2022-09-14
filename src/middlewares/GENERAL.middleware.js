const { getProducts } = require('../models/SQLqueries/GETproducts.model');

function checkBody(req, res, next) {
  const { body } = req;
  if (body === {}) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
}

function checkName(req, res, next) {
  const { name } = req.body;
  if (name === undefined || name === '' || name === null) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const nameArr = name.split('');
  if (nameArr.length <= 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
}

async function checkId(req, res, next) {
  const id = Number(req.params.id);
  console.log('ID ------->', id);
  const [idArr] = await getProducts();
  console.log(idArr);
  const check = idArr.some((prod) => prod.id === id);
  if (check) {
    return next();
  }
  return res.status(404).json({ message: 'Product not found' });
}

module.exports = {
  checkName,
  checkBody,
  checkId,
};