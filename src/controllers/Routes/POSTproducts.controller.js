const express = require('express');
const { postProductCallback } = require('../callbacks/POSTproducts.callback');
const { checkName } = require('../../middlewares/POSTproducts.middleware');
const checkBody = require('../../middlewares/generalMiddlewares/checkBody');

const router = express.Router();

router.post('/', checkBody, checkName, postProductCallback);

module.exports = router;