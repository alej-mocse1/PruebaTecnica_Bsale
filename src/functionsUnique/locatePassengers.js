const MiError = require("../utils/ErrorPersonalizado" );

module.exports = (flight, passengers) => {

  //declaramos tres arreglos para agrupar a los pasajeros que tienen un asiento asignado mas adelante
    const premiun = []
    const media = []
    const baja = []
 
    //si flight.length tiene una longitud de cero significa que no hay un vuelo que coincida con el :id del endpoint 
    //por lo tanto nos da el error de vuelo no encontrado (solicidato) que va a ser capturado por el manejador de errores personalizado que creamos
    if(flight.length == 0)throw new MiError("", 404);

    
    //guardamos en una constante todos los pasajeros que no TIENEN un asiento asignado 
    const tarjetasSinAsiento = passengers.filter(
      (tarjeta) => !tarjeta.seat_id
    );

    //recorremos el arreglo de pasajeros para agruparlos en los tres arreglos premiun, media y baja que declaramos anteriormente
    //tambien descartamos a los que no tienen asiento
    passengers.forEach((elem) => {
      if(elem.seat_type_name === "Primera clase" && elem.seat_id) premiun.push(elem) ;
      if(elem.seat_type_name === "Clase económica premium" && elem.seat_id) media.push(elem) ;
      if(elem.seat_type_name === "Clase económica" && elem.seat_id) baja.push(elem) ;
    })

    // ordenamos cada uno de estos arreglos por id del asiento
    // recordemos que ya estan agrupados por clase 
    const premiunOrd = premiun.sort((a, b) => a.seat_id - b.seat_id)
    const mediaOrd = media.sort((a, b) => a.seat_id - b.seat_id)
    const bajaOrd = baja.sort((a, b) => a.seat_id - b.seat_id)



    
    //a cada pasajero menor de edad de los que NO TIENEN asiento lo ubicamos al lado de uno mayor en el nuevo arreglo
    const tajerjetasSinAsientoOrdxEdad = tarjetasSinAsiento.sort((a, b) => {
      if (a.age < 18 && b.age >= 18) {
        return -1; // a debe estar antes que b
      } else if (a.age >= 18 && b.age < 18) {
        return 1; // b debe estar antes que a
      } else {
        return 0; // no se cambia el orden entre a y b
      }
    })


   // en este ciclo de ejecucion ubicamos a los pasajeros que NO TIENEN asientos asignados
   // como  tienen tipo de clase los ubicamos en su arreglo correspondiente
   // los ubicamos en la ultima columna disponible y los vamos ubicando por numero de asiento
    tajerjetasSinAsientoOrdxEdad.forEach((elem) => {
          
      if(elem.seat_type_name === "Primera clase"){
        premiunOrd.push({
          ...elem,
          seat_column: premiunOrd[arreglo.length - 1].seat_column,
          seat_row: premiunOrd[arreglo.length - 1].seat_row + 1,
        })
      }
      if(elem.seat_type_name === "Clase económica premium" ){
        mediaOrd.push({
          ...elem,
          seat_column: premiunOrd[arreglo.length - 1].seat_column,
          seat_row: premiunOrd[arreglo.length - 1].seat_row + 1,
        })
      }
      if(elem.seat_type_name === "Clase económica") {
        bajaOrd.push({
          ...elem,
          seat_column: premiunOrd[arreglo.length - 1].seat_column,
          seat_row: premiunOrd[arreglo.length - 1].seat_row + 1,
        })
      }
    })


   
   //creamos un nuevo arreglo usando el spread operator de ES6
   //este nuevo arreglo ya contaria con cada pasajero ubicado por asiento y contaria con su clase de vuelo
   //tambien nos aseguramos de que los pasajeros menores se coloquen al lado de uno mayor 
   //y retornamos el nuevo arreglo con los pasajeros y sus asientos asignados
    return [...premiunOrd, ...mediaOrd, ...bajaOrd]

    
   };
   
