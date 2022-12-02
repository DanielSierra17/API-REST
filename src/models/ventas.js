const { Schema, model } = require("mongoose");

const ventasSchema = new Schema({
    Precio: Number,
    Detalle: String,
    Fecha: Date,
    _idCliente: Number,
    _idCelular: Number,
    _id: Number
});

module.exports = model("ventas", ventasSchema);