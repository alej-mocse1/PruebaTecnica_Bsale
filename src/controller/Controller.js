const {trycatchErr} = require("../utils/utils.js")

//en este caso envolvemos al controller con trycatchErr y nos aeguramos de que si pasa algo el capturador de errores personalizado
//se encargue de ese error, tambien mantenemos el codigo mas limpio al exportar todo como props y requerir solo el obj despues
module.exports = {
    Info : trycatchErr(require("./SetInfoID.js"),)
}