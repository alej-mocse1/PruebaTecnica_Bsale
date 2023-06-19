const { conn } = require("./src/db.js");
const server = require('./src/server.js');
require('dotenv').config()

const PORT = process.env.PORT || 3004

//ejecutamos todo nuestro proyecto 

server.listen(PORT,() => {
    console.log("servidor escuchando en " + PORT)
})