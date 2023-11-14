//Para importar el módulo file system
const fs = require('fs');

require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const { databaseService } = require('./services/databaseService');

const app = express();

app.use(bodyParser.json());

//Control de error de acceso
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // 
//--------------

//Funcionalidad y parámetros de la api
module.exports = function(app, databaseService) {

    // Lee el archivo JSON de los datos catastrales
     const contenido = fs.readFileSync('Datos-catastro.json', 'utf-8');

     // Parsea el contenido a un objeto JavaScript
     const predios = JSON.parse(contenido);

     //Ingresar un nuevo dato (contribuyente)
     app.post('/contribuyentes', (req, res) => {
        const nuevoContribuyente = req.body;
        console.log(nuevoContribuyente);
        databaseService
            .crearContribuyente(
                nuevoContribuyente.nombre, 
                )
            .then(() => {
                res.json({message: "created!"});
            }).catch(e => {
                res.status(500).send(e);
            });
      });

    //Leer los contribuyentes almacenados en la base de datos
    app.get('/contribuyentes', (req, res) => {
        databaseService.getContribuyentes()
            .then(contribuyentes => res.json(contribuyentes))
            .catch(e => res.status(500).send(e));
    });


    //Ingresar un nuevo dato (propiedades)
    // app.post('/propiedades', (req, res) => {
    //     const nuevaPropiedad = req.body;
    //     console.log(nuevaPropiedad);
    //     databaseService
    //         .crearPropiedad(
    //             nuevaPropiedad.id_contribuyente,
    //             nuevaPropiedad.direccion,
    //             nuevaPropiedad.valor_catastral 
    //             )
    //         .then(() => {
    //             res.json({message: "created!"});
    //         }).catch(e => {
    //             res.status(500).send(e);
    //         });
    //   }); 

    app.use('/', express.static('Vista'));

    //Lee los predios
    app.get('/api/predios', (req, res) => {
        res.send(predios);
    });
    
    app.get('/api/predios/:codCatastral', (req, res) =>{
        const predio = predios.find(c => c.codCatastral === req.params.codCatastral);
        if (!predio) return res.status(404).send('Predio no encontrado...');
        else res.send(predio);
    });
    
    
    app.post('/api/predios', (req, res) => {
        const predio = {
            Vigencia: "2023",
            codCatastral: req.body.codCatastral,
            direccion: req.body.direccion,
            numPredial: req.body.numPredial,
            Propietario: req.body.Propietario,
            Avaluo: req.body.Avaluo,
            Estrato: req.body.Estrato,
            Departamento: "Cundinamarca",
            Ciudad: "Silvania"
        }
        predios.push(predio);
        res.send(predio);
    });
    
    app.delete('/api/predios/:codCatastral', (req, res) => {
        const predio = predios.find(c => c.codCatastral === parseInt(req.params.codCatastral));
        if (!predio) return res.status(404).send('Predio no encontrado');
    
        const index = predios.indexOf(predio);
        predios.splice(index, 1);
        res.send(predio);
    });

};