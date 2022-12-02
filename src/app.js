const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const conexionBD = require('./db.conexion');
// const rutasClientes = require('./routes/clientes.routes');
const rutasCelulares = require('./routes/celulares.routes');
// const rutasVentas = require('./routes/ventas.routes');
const app = express()
const port = process.env.PORT || 3000;

//Conexión a la BD
conexionBD();

//Configuraciones
app.set("name", "api-celulares");
app.set("port", process.env.port || 3000);

//Midlewares
app.use(express.json());
app.use(morgan("dev"));

//Llamado de rutas
app.use('/public', express.static('public/index.html'));
// app.use("/api/clientes", rutasClientes);
app.use("/api/celulares", rutasCelulares);
// app.use("/api/ventas", rutasVentas);

module.exports = app;