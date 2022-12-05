const { Router } = require("express");
const rutasCelulares = Router();
const ctrCelulares = require("../controllers/celulares.controller");
const multer = require("multer");

rutasCelulares.get('/', ctrCelulares.get);

rutasCelulares.get('/:id', ctrCelulares.getId);

rutasCelulares.post('/', ctrCelulares.add);

rutasCelulares.put('/:idCelulares', ctrCelulares.edit);

module.exports = rutasCelulares;