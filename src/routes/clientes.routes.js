const { Router } = require("express");
const rutasClientes = Router();
const ctrClientes = require("../controllers/clientes.controller");
const autorizedHuesped = require("../auth/auth.clientes");
const multer = require("multer");

rutasClientes.get('/', ctrClientes.get);

rutasClientes.get('/:id', ctrClientes.getId);

rutasClientes.post('/', ctrClientes.add);

rutasClientes.put('/:id', ctrClientes.edit);

rutasClientes.delete('/:id', ctrClientes.delete);

module.exports = rutasClientes;