const { Router } = require("express");
const rutasClientes = Router();
const ctrClientes = require("../controllers/clientes.controller");
const multer = require("multer");

rutasClientes.get('/', ctrClientes.get);

rutasClientes.get('/:id', ctrClientes.getId);

rutasClientes.post('/', ctrClientes.add);

rutasClientes.put('/:idClientes', ctrClientes.edit);

module.exports = rutasClientes;