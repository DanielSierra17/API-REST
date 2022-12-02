const mongoose = require('mongoose');

const conexionBD = async () => {

    const uri = `mongodb+srv://DanielSierra18:daniel123@celulares.2njyllo.mongodb.net/Celulares?retryWrites=true&w=majority`;
    
    try {
        const DB = await mongoose.connect(uri);
        console.log("Conexión satisfactoria", DB.connection.name);
    } catch (error) {
        console.log(error);
    }
    
};

module.exports = conexionBD;