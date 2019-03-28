const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Rota de produtos
routes.get('/products', ProductController.index);

//Rota de creating
routes.post('/products', ProductController.store);

//Rota de Show
routes.get('/products/:id', ProductController.show);

//Rota de update
routes.put('/products/:id', ProductController.update);

//Rota de destroy
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;