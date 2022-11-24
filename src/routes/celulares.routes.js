const {Router}=require("express");
const rutasCelulares=Router();
const ctrCelulares=require("../controllers/celulares.controller");
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



rutasCelulares.get('/', ctrCelulares.obtener);

rutasCelulares.get('/:id', ctrCelulares.obtenerid);

rutasCelulares.post('/', carga.single('img'),ctrCelulares.add);

rutasCelulares.post('/login', ctrCelulares.login);
  
rutasCelulares.put('/:id',carga.single('img'),ctrCelulares.edit);


module.exports=rutasCelulares;