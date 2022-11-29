const { Schema, model } = require("mongoose");

const ventasSchema = new Schema({
    Precio: Number,
    Detalle: String,
    Fecha: Date,
    _idCelular: Number,
    _idCelular: Number,
    _id: Number
});

ventasSchema.methods.setImg = function setImg(filename) {
    this.img = `http://localhost:3000/public/${filename}`;
    console.log("entró al método " + this.img);
}

module.exports = model("ventas", ventasSchema);