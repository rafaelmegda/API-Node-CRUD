const express = require("express");
const cors = require("cors");
const mongoose =require("mongoose");
const requireDir =require("require-dir");

//Iniciando o APP
const app = express();
app.use(express.json());
//permitindo acesso aos outros dominios (esta publico)
app.use(cors());

//iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true}
);
requireDir("./src/models");

//rotas
app.use('/api', require("./src/routes"));

app.listen(3001);