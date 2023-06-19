//finalmente desde este archivo exporamos cada una de las funciones 
// y cuando las requerimos solo necesitamos este objeto para usar sus props(funciones)
//esto mantiene nustro codigo mas limpio a futuro

module.exports = {
    clean : require("./cleanJson.js"),
    locate : require("./locatePassengers.js"),
}