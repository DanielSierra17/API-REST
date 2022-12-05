const { Router } = require("express");
const rutasVentas = Router();
const ctrVentas = require("../controllers/ventas.controller");
const multer = require("multer");

rutasVentas.get('/', ctrVentas.get);

rutasVentas.get('/:id', ctrVentas.getId);

rutasVentas.post('/', ctrVentas.add);

rutasVentas.put('/:idVentas', ctrVentas.edit);

module.exports = rutasVentas;