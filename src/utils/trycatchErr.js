  // La función envoltorio recibe los parámetros req, res y next
  // Llama a la función controller "fn" pasándole los parámetros req y res
  // Utiliza el método "catch" para capturar cualquier error que se produzca dentro de "fn"
  // Si se produce un error, pasa el error al siguiente middleware en la cadena que seria el capturador de errores que creamos
  // de esta manera nos encargamos de que el codigo sea mas limpio, y ordenado (sin necesidad de envolver cada ruta en try catch)
  // esto mejora nuestro codigo cuando escalemos el proyecto

module.exports = (fn) => {

  return function(req, res, next) {
    fn(req, res).catch((error) => {
      next(error);
    });
  };
};