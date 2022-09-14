const express = require('express');
const { postProductCallback } = require('../callbacks/POSTproducts.callback');
const { checkBody, checkName } = require('../../middlewares/GENERAL.middleware');

const router = express.Router();

router.post('/', checkBody, checkName, postProductCallback);

module.exports = router;