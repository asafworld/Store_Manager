const { postSalesServiceCheck } = require('../../services/POSTsales.service');

async function postSalesCallback(req, res) {
  const { body } = req;
  const serviceAnswer = await postSalesServiceCheck(body);
  if (serviceAnswer.answer === true) {
    return res.status(201).json({
      id: serviceAnswer.id,
      itemsSold: body,
    });
  }
}

module.exports = {
  postSalesCallback,
};