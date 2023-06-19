class MiError extends Error {
   constructor(mensaje, status) {
     // Llamamos al constructor de la clase base Error con el mensaje de error
     super(mensaje);
 
     // Asignamos el código de estado al atributo "status" de la instancia de MiError
     // Si no se proporciona un valor para "status", se establece un valor predeterminado de 400 (Bad Request)
     this.status = status || 400;
   }
 }
 
 // Exportamos la clase MiError para que pueda ser utilizada en otros módulos
 module.exports = MiError;