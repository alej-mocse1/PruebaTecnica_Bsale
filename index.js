const { conn } = require("./src/db.js");
const server = require('./src/server.js')

const PORT = 8003

//ejecutamos todo nuestro proyecto 
server.listen(PORT,() => {
    console.log("servidor escuchando en " + PORT)
})