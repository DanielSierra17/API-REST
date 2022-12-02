const { Schema, model } = require("mongoose");

const celularesSchema = new Schema({
    Red: String,
    Almacenamiento: String,
    Memoria: String,
    Modelo: Number,
    Marca: String,
    Nombre: String,
    _id: Number
});

module.exports = model("celulares", celularesSchema);