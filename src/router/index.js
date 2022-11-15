
const { Router } = require('express');
const express = require('express');
const app = express();

let envio = require('../controlador/correoControlador');
app.post('/envio', envio.enviarCorreo);


console.log('las rutas estan corriendo')
module.exports = app;
