const { Router } = require("express");
const rutasCelulares = Router();
const ctrCelulares = require("../controllers/celulares.controller");
const autorizedHuesped = require("../auth/auth.celulares");
const multer = require("multer");

rutasCelulares.get('/', ctrCelulares.get);

rutasCelulares.get('/:id', ctrCelulares.getId);

rutasCelulares.post('/', ctrCelulares.add);

rutasCelulares.put('/:id', ctrCelulares.edit);

rutasCelulares.delete('/:id', ctrCelulares.delete);

module.exports = rutasCelulares;