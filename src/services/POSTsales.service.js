const { postSales, postSalesDate } = require('../models/SQLqueries/POSTsales.model');
const { getId } = require('../models/SQLqueries/GETid.model');

async function lastId() {
  const id = await getId();
  console.log(id.length);
  const newId = id.length + 1;
  return newId;
}

async function insertCheck(saleId, productId, quantity) {
  console.log('entrou no insertCheck');
  const [insertReturn] = await postSales(saleId, productId, quantity);
  if (insertReturn.affectedRows <= 0) {
    console.log('retornou false no insertCheck');
    return false;
  }
  console.log('retornou true no insertCheck');
  return true;
}

async function dateCheck(saleId) {
  console.log('entrou no dateCheck');
  const [insertReturn] = await postSalesDate(saleId);
  if (insertReturn.affectedRows <= 0) {
    console.log('retornou false no dateCheck');
    return false;
  }
  console.log('retornou true no dateCheck');
  return true;
}

async function postSalesServiceCheck(body) {
  const saleId = await lastId();
  const date = await dateCheck(saleId);
  const salesArr = [];
  body.forEach(async (sale) => {
    const { productId, quantity } = sale;
    const saleC = await insertCheck(saleId, productId, quantity);
    salesArr.push(saleC);
  });
  const sales = salesArr.every((i) => i === true);
  if (sales === true && date === true) {
    const returnObj = {
      answer: true,
      id: saleId,
    };
    return returnObj;
  }
  return 'ERROR';
}

module.exports = {
  postSalesServiceCheck,
};