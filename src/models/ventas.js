const { Schema, model } = require("mongoose");

const ventasSchema = new Schema({
    _idCelular: Number,
    _idCliente: Number,
    Fecha: Date,
    Detalle: String,
    Precio: Number
});

module.exports = model("ventas", ventasSchema);