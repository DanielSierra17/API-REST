const User = require("../models/celulares");
const jwt = require("jsonwebtoken");

const autorizedCelular = async (req, res, next) => {
    const strToken = req.headers.authorization;
    if (!strToken) {
        return res.json({ msj: "No se encontró el token" });
    }
    const token = strToken.split(" ")[1];
    console.log(token);
    const palabra = "hotelia-kuepa";
    const key = jwt.verify(token, palabra);
    const celular = await User.findById(key._id);
    if (!celular) {
        return res.json({ msj: "No se encontró el celular" });
    }
    console.log(key);
    next();
}

module.exports = autorizedCelular;