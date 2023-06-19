//finalmente desde este archivo exporamos cada una de las funciones 
// y cuando las requerimos solo necesitamos este objeto para usar sus props(funciones)
//esto mantiene nustro codigo mas limpio a futuro

module.exports = {
    tMiError : require("./ErrorPersonalizado.js"),
    trycatchErr : require("./trycatchErr.js"),
}