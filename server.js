//Inicialización de modulos
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var rutas = require('./backend/rutas');

//Configuración
mongoose.connect('mongodb://127.0.0.1:27017/lab09');
app.use(express.static(__dirname+'/angular'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Carga de rutas
rutas.iniciar(__dirname);
rutas.principal(app);

//Inicia el servidor
app.listen(3000);
console.log('Escuchando en el puerto 3000');
