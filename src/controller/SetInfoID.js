const { conn } = require('../db.js');

///importamose el objeto que contiene todas las funciones unicas de este proyecto
/// de esta manera usamos cada funcion accediendo a las props del obj
///nos ahorramos importar cada una de las funciones, y mantenemos mas limpio el codigo 
const UniqueFn = require("../functionsUnique/unique.js")

module.exports = async(req,res) => {
 
      const rutaId = req.params;

      //declaramos dos consultas condicionadas por id y con sus relaciones
      //para luego usarlas
        const fligth = ` 
        SELECT * 

        FROM flight
        JOIN airplane ON flight.airplane_id = airplane.airplane_id

        WHERE flight.flight_id = ${rutaId.id} ;
       `; 

        const Pasengers = `
        SELECT boarding_pass.*,
            passenger.*,           
            seat_type.name AS seat_type_name,
            seat.*,
            purchase.*
    
        FROM boarding_pass
            JOIN passenger ON boarding_pass.passenger_id = passenger.passenger_id
            JOIN seat ON boarding_pass.seat_id = seat.seat_id
            JOIN seat_type ON boarding_pass.seat_type_id = seat_type.seat_type_id
            JOIN purchase ON boarding_pass.purchase_id = purchase.purchase_id
        WHERE boarding_pass.flight_id = ${rutaId.id};
        `; 

      
     const [ infoFligth , queryAvion] = await conn.query(fligth); // Ejecuta la consulta utilizando sequelize.query()
     const [ infoPasengers , queryPasengers] = await conn.query(Pasengers); // Ejecuta la consulta utilizando sequelize.query()
   

     //usamos las funciones para asignar los asientos a los pasajeros que no tienen y limpiar el json para la respuesta
     const  locatePasengers = await UniqueFn.locate(infoFligth, infoPasengers)

     const response = await UniqueFn.clean(infoFligth, locatePasengers)
      
     res.status(200).json(response);
     return response

}




