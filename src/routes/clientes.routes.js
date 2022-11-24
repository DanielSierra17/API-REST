const {Router}=require("express");
const rutasClientes=Router();
const ctrClientes=require("../controllers/clientes.controller");
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

rutasClientes.get('/', ctrClientes.obtener);

rutasClientes.get('/:id', ctrClientes.obtenerid);

rutasClientes.post('/', carga.single('img'),ctrClientes.add);

rutasClientes.post('/login', ctrClientes.login);
  
rutasClientes.put('/:id',carga.single('img'),ctrClientes.edit);


module.exports=rutasClientes;