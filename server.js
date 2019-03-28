const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Iniciando DB
mongoose.connect('mongodb://localhost:1111/api-rest', { useNewUrlParser: true } );

requireDir('./src/models');

const Product = mongoose.model('product');

app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'É uma tecnologia para desenvolver apps mobile',
        url: 'https://github.com/facebook/react-native'
    });

    return res.send("Hello World");
});

app.listen(3001);