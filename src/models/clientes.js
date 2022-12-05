const { Schema, model } = require("mongoose");

const clientesSchema = new Schema({
    Tipo: String,
    Nombre: String,
    Apellido: String,
    Edad: Number,
    Sexo: String,
    Correo: String,
    Telefono: Number,
    Direccion: String
});

module.exports = model("clientes", clientesSchema);