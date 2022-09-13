const { postSales, postSalesDate } = require('../models/SQLqueries/POSTsales.model');
const { getId } = require('../models/SQLqueries/GETid.model');

async function lastId() {
  const id = await getId();
  const newId = id.length + 1;
  return newId;
}

async function insertCheck(saleId, productId, quantity) {
  const [insertReturn] = await postSales(saleId, productId, quantity);
  if (insertReturn.affectedRows <= 0) {
    return false;
  }
  return true;
}

async function dateCheck(saleId) {
  const [insertReturn] = await postSalesDate(saleId);
  if (insertReturn.affectedRows <= 0) {
    return false;
  }
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