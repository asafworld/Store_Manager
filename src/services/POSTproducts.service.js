const { postProduct } = require('../models/SQLqueries/POSTproducts.model');

async function postProductReturn(name) {
  const result = await postProduct(name);
  console.log(result);
  if (result[0].affectedRows >= 1) {
    return result;
  }
  return 'ERROR';
}

module.exports = {
  postProductReturn,
};