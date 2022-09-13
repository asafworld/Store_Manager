const express = require('express');
const getProducts = require('./controllers/Routes/GETproducts.controller');
const postProduct = require('./controllers/Routes/POSTproducts.controller');
const postSales = require('./controllers/Routes/POSTsales.controller');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', getProducts);
app.use('/products', postProduct);
app.use('/sales', postSales);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;