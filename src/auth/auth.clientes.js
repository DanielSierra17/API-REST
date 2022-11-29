const User = require("../models/clientes");
const jwt = require("jsonwebtoken");

const autorizedCliente = async (req, res, next) => {
    const strToken = req.headers.authorization;
    if (!strToken) {
        return res.json({ msj: "No se encontró el token" });
    }
    const token = strToken.split(" ")[1];
    console.log(token);
    const palabra = "hotelia-kuepa";
    const key = jwt.verify(token, palabra);
    const cliente = await User.findById(key._id);
    if (!cliente) {
        return res.json({ msj: "No se encontró el cliente" });
    }
    console.log(key);
    next();
}

module.exports = autorizedCliente;