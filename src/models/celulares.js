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

celularesSchema.methods.setImg = function setImg(filename) {
    this.img = `http://localhost:3000/public/${filename}`;
    console.log("entró al método " + this.img);
}

module.exports = model("celulares", celularesSchema);