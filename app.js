require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const { databaseService } = require('./services/databaseService');

const app = express();

app.use(bodyParser.json());

const dbService = databaseService();
require('./routes')(app, dbService);

//Control de error
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
//--------------


const predios = [

    {
     "Vigencia": 2023,
     "codCatastral": "23456789012345",
     "direccion": "Calle 123 # 45-67, Silvania, Cundinamarca",
     "numPredial": "123456-00",
     "Propietario": "Juan Pérez",
     "Avaluo": 200000000,
     "Estrato": 3,
     "Departamento": "Cundinamarca",
     "Ciudad": "Silvania"
    },
    {
     "Vigencia": 2023,
     "codCatastral": "987654321098765",
     "Direccion": "Carrera 7 # 23-45, Silvania, Cundinamarca",
     "numPredial": "543210-00",
     "Propietario": "María García",
     "Avaluo": 380000000,
     "Estrato": 4,
     "Departamento": "Cundinamarca",
     "Ciudad": "Silvania"
    },
    {
     "Vigencia": 2023,
     "codCatastral": "123456789012345",
     "direccion": "Avenidaa 19 # 34-56, Silvania, Cundinamarca",
     "numPredial": "789456-00",
     "Propietario": "José González",
     "Avaluo": 150000000,
     "Estrato": 5,
     "Departamento": "Cundinamarca",
     "Ciudad": "Silvania"
    },
    {
     "Vigencia": 2023,
     "codCatastral": "87654321098765",
     "direccion": "Calle 80 # 67-89, Silvania, Cundinamarca",
     "numPredial": "901234-00",
     "Propietario": "Ana Rodríguez",
     "Avaluo": 500000000,
     "Estrato": 6,
     "Departamento": "Cundinamarca",
     "Ciudad": "Silvania"
    },
    {
     "Vigencia": 2023,
     "codCatastral": "2345678901234530",
     "direccion": "Carrera 45 # 78-90, Silvania, Cundinamarca",
     "numPredial": "012345-00",
     "Propietario": "Pedro Hernández",
     "Avaluo": 280000000,
     "Estrato": 5,
     "Departamento": "Cundinamarca",
     "Ciudad": "Silvania"
    },
    {
     "Vigencia": 2023,
     "codCatastral": "234567890123765",
     "direccion": "Calle 100 # 50-60, Silvania, Cundinamarca",
     "numPredial": "100506-00",
     "Propietario": "María López",
     "Avaluo": 350000000,
     "Estrato": 5,
     "Departamento": "Cundinamarca",
     "Ciudad": "Silvania"
    },
    {
     "Vigencia": 2023,
     "codCatastral": "47654321098765",
     "direccion": "Carrera 60 # 30-40, Silvania, Cundinamarca",
     "numPredial": "300403-00",
     "Propietario": "Juan Gómez",
     "Avaluo": 80000000,
     "Estrato": 4,
     "Departamento": "Cundinamarca",
     "Ciudad": "Silvania"
    },
    {
     "Vigencia": 2023,
     "codCatastral": "1234567890123",
     "direccion": "Avenida 20 # 70-80, Silvania, Cundinamarca",
     "numPredial": "700807-00",
     "Propietario": "José Sánchez",
     "Avaluo": 90000000,
     "Estrato": 4,
     "Departamento": "Cundinamarca",
     "Ciudad": "Silvania"
    },
    {
     "Vigencia": 2023,
     "codCatastral": "987654109876521",
     "direccion": "Calle 90 # 40-50, Silvania, Cundinamarca",
     "numPredial": "400504-00",
     "Propietario": "Ana Pérez",
     "Avaluo": 1000000000,
     "Estrato": 6,
     "Departamento": "Cundinamarca",
     "Ciudad": "Silvania"
    },
    {
     "Vigencia": 2023,
     "codCatastral": "2345678901234",
     "direccion": "Carrera 50 # 20-30, Silvania, Cundinamarca",
     "numPredial": "200302-00",
     "Propietario": "Pedro Rodríguez",
     "Avaluo": 110000000,
     "Estrato": 5,
     "Departamento": "Cundinamarca",
     "Ciudad": "Silvania"
    }
   ]



// app.get('/api/predios', (req, res) => {
//     res.send(predios);
// });

// app.get('/api/predios/:codCatastral', (req, res) =>{
//     const predio = predios.find(c => c.codCatastral === req.params.codCatastral);
//     if (!predio) return res.status(404).send('Predio no encontrado...');
//     else res.send(predio);
// });



// app.post('/api/predios', (req, res) => {
//     const predio = {
//         Vigencia: "2023",
//         codCatastral: req.body.codCatastral,
//         direccion: req.body.direccion,
//         numPredial: req.body.numPredial,
//         Propietario: req.body.Propietario,
//         Avaluo: req.body.Avaluo,
//         Estrato: req.body.Estrato,
//         Departamento: "Cundinamarca",
//         Ciudad: "Silvania"
//     }
//     predios.push(predio);
//     res.send(predio);
// });

// app.delete('/api/predios/:codCatastral', (req, res) => {
//     const predio = predios.find(c => c.codCatastral === parseInt(req.params.codCatastral));
//     if (!predio) return res.status(404).send('Predio no encontrado');

//     const index = predios.indexOf(predio);
//     predios.splice(index, 1);
//     res.send(predio);
// });

const port = process.env.port || 80;
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`)); 

