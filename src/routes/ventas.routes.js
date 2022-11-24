const {Router}=require("express");
const rutasVentas=Router();
const ctrVentas=require("../controllers/ventas.controller");
const autorizedHuesped=require("../auth/auth");
const multer=require("multer");
const fecha=Date.now();

const rutaStorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './public/upload/');
    },
    filename:function(req,file,callback){
        console.log(file);
        callback(null,fecha+"_"+file.originalname);
    }
});

const carga=multer({storage:rutaStorage});

rutasVentas.get('/', ctrVentas.obtener);

rutasVentas.get('/:id', ctrVentas.obtenerid);

rutasVentas.post('/', carga.single('img'),ctrVentas.add);

rutasVentas.post('/login', ctrVentas.login);
  
rutasVentas.put('/:id',carga.single('img'),ctrVentas.edit);


module.exports=rutasVentas;