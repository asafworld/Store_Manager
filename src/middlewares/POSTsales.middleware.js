const { getProductId } = require('../models/SQLqueries/GETid.model');

async function checkIdExistence(req, res, next) {
  const { body } = req;
  const idArr = await getProductId();
  const checkArr = [];
  idArr.forEach((id) => {
    const check = body.some((sales) => sales.productId === id.id);
    if (check) {
    checkArr.push(check);
    }
  });
  if (body.length === checkArr.length) {
    return next();
  }
  return res.status(404).json({ message: 'Product not found' });  
}

function isIdPresent(req, res, next) {
  const { body } = req;
  const check = body.every((sale) => sale.productId !== undefined);
  if (check) {
    return next();
  }
  return res.status(400).json({ message: '"productId" is required' });
}

function isQuantityPresent(req, res, next) {
  const { body } = req;
  const check = body.every((sale) => sale.quantity !== undefined);
  if (check) {
    return next();
  }
  return res.status(400).json({ message: '"quantity" is required' });
}

function quantityMin(req, res, next) {
  const { body } = req;
  const check = body.every((sale) => sale.quantity <= 0);
  if (check) {
    return res.status(422).json(
      { message: '"quantity" must be greater than or equal to 1' },
    );
  }
  return next();
}

module.exports = {
  checkIdExistence,
  isIdPresent,
  isQuantityPresent,
  quantityMin,
};