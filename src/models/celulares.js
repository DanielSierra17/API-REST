const { Schema, model } = require("mongoose");

const celularesSchema = new Schema({
    nombrehab: String,
    numerohab: String,
    capacidad: Number,
    camas: String,
    descripcion: String,
    wifi: String,
    tv: String,
    banio: String,
    cajafuerte: String,
    nevera: String,
    valornoche: Number,
    img: String,
    estado: String,
    _id: Number
});

celularesSchema.methods.setImg = function setImg(filename) {
    this.img = `http://localhost:3000/public/${filename}`;
    console.log("entró al método " + this.img);
}



module.exports = model("celulares", celularesSchema);