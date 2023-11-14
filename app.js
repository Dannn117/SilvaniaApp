require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const { databaseService } = require('./services/databaseService');

const app = express();

app.use(bodyParser.json());

const dbService = databaseService();
require('./routes')(app, dbService);

//Control de error de acceso
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // 
//--------------

//Establece el puerto para iniciar el servidor
const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`)); 

