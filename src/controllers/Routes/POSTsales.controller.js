const express = require('express');
const { postSalesCallback } = require('../callbacks/POSTsales.callback');
const { checkIdExistence,
  isIdPresent, isQuantityPresent, quantityMin } = require('../../middlewares/POSTsales.middleware');

const router = express.Router();

router.post('/', isIdPresent, isQuantityPresent, quantityMin, checkIdExistence, postSalesCallback);

module.exports = router;