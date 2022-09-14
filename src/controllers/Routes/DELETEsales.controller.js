const express = require('express');
const { checkSaleId } = require('../../middlewares/GENERAL.middleware');
const { deleteSalesCallback } = require('../callbacks/DELETEsales.callback');

const router = express.Router();

router.delete('/:id', checkSaleId, deleteSalesCallback);

module.exports = router;
