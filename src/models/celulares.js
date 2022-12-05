const { Schema, model } = require("mongoose");

const celularesSchema = new Schema({
    Nombre: String,
    Marca: String,
    Modelo: Number,
    Memoria: String,
    Almacenamiento: String,
    Red: String
});

module.exports = model("celulares", celularesSchema);