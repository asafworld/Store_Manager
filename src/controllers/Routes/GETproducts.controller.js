const express = require('express');
const { products, idProduct } = require('../callbacks/GETproducts.callback');

const router = express.Router();

router.get('/', products);
router.get('/:id', idProduct);

module.exports = router;
