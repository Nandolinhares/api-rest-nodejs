const express = require('express');
const mongoose = require('mongoose');

//Iniciando o app
const app = express();

//Iniciando DB
mongoose.connect('mongodb://localhost:1111/api-rest', { useNewUrlParser: true } );

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(3001);