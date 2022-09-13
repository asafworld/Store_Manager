const express = require('express');
const { getAllSalesCallback, getSalesByIdCallback } = require('../callbacks/GETsales.callback');

const router = express.Router();

router.get('/', getAllSalesCallback);
router.get('/:id', getSalesByIdCallback);

module.exports = router;