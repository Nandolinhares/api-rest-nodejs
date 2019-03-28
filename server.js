const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o app
const app = express();

app.use(express.json()); //Permite que eu envie dados a minha apps usando JSON
app.use(cors());

//Iniciando DB
mongoose.connect('mongodb://localhost:1111/api-rest', { useNewUrlParser: true } );

requireDir('./src/models');

app.use('/api', require("./src/routes"));


app.listen(3001);