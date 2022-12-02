const { Schema, model } = require("mongoose");

const clientesSchema = new Schema({
    Direccion: String,
    Telefono: Number,
    Correo: String,
    Sexo: String,
    Edad: Number,
    Apellido: Number,
    Nombre: String,
    Tipo: String,
    _id: Number
});

module.exports = model("clientes", clientesSchema);