const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Rota de produtos
routes.get('/products', ProductController.index);

module.exports = routes;