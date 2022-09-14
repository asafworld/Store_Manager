const express = require('express');
const { checkBody, checkName, checkId } = require('../../middlewares/GENERAL.middleware');
const updateProductsCallback = require('../callbacks/PUTproducts.callback');

const router = express.Router();

router.put('/:id', checkId, checkBody, checkName, updateProductsCallback);

module.exports = router;