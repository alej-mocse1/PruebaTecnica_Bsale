const Router = require("express");

//importamos el obj controller con todas sus props , de esta manera cuando nuestro proyecto necesite mas rutas
//solo llamamos a la prop correspondiente sin necesidad de importar todos los controllers (de esta menera tenemos un codigo mas limpio)
const Controller = require("../controller/controller");


const Route = Router();


//Usamos el obj controller con sus props
Route.get("/flights/:id/passengers", Controller.Info)


module.exports = Route