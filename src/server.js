const Express = require("express");
const morgan = require("morgan");
const MiError = require("./utils/ErrorPersonalizado" );

const server = Express();

server.use(morgan("dev"));
server.use(Express.json());


server.use(require("./routes/routes.js"))




// creamos el capturador de errores personalizado
// esto nos va permitir caputar cualquier tipo de error sin la necesidad de andar declarando
// try catch en cada una de nuestras rutas (esto nos permite tener un codigo limpio , mas ordenado y 
// mucho mas escalable a medida que nuestro proyecto valla necesitando mas rutas)

server.use((error, req, res, next) => {
  // Verificamos si el error es una instancia de MiError
  if (error instanceof MiError) {
    // Si es una instancia de MiError, devolver la respuesta con el código de estado y un objeto JSON que se solicito
    return res.status(error.status).json({
      code: error.status,
      data: {},
    });
  }
  
  // Si no es una instancia de MiError, devolver una respuesta con un código de estado 400 y un objeto JSON como tambien se solicito
  res.status(400).json({
    code: 400,
    errors: error.message 
  });
});

module.exports = server