const Sequelize = require('sequelize');


//creamos la conexión a la base de datos y la guardamos en una constante
//En un proyecto real tendriamos que usar variables de entorno para mantener nuestros datos ocultos y mejorar la seguridad
const sequelize = new Sequelize('airline', 'bsale_test', 'bsale_test', {
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  dialect: 'mysql',
});


// Probamos la conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

     // Obtener todas las tablas
     const query = "SELECT table_name FROM information_schema.tables WHERE table_schema = 'airline';";
     return sequelize.query(query, { type: Sequelize.QueryTypes.SELECT });
  })
  .then(tables => {
    console.log('Tablas encontradas:');
    tables.forEach(table => {
      console.log(table.table_name);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

  module.exports = {
      conn: sequelize, // para importar la conexión { conn } = require('./db.js');
  };


