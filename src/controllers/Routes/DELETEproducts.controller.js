const express = require('express');
const { deleteProductsCallback } = require('../callbacks/DELETEproducts.callback');
const { checkId } = require('../../middlewares/GENERAL.middleware');

const router = express.Router();

router.delete('/:id', checkId, deleteProductsCallback);

module.exports = router;