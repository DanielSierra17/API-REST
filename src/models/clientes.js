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

clientesSchema.methods.setImg = function setImg(filename) {
    this.img = `http://localhost:3000/public/${filename}`;
    console.log("entró al método " + this.img);
}

module.exports = model("clientes", clientesSchema);