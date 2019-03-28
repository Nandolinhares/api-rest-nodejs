const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

app.use(express.json()); //Permite que eu envie dados a minha apps usando JSON

//Iniciando DB
mongoose.connect('mongodb://localhost:1111/api-rest', { useNewUrlParser: true } );

requireDir('./src/models');

app.use('/api', require("./src/routes"));

app.get('/', (req, res) => {
   res.send("Hello World");
});

app.listen(3001);