module.exports = (flight, passengers) => {

  //nos encargamos de limpiar el json con el formato solicitado
  //en la prop passengers usamos el map para crear un nuevo arreglo con el formato que se solicito
  //tambien nos encargamos de devolver todo en Camel case.
    const transformedData = {
      code: 200,
      data: {
        flightId: flight[0].flight_id,
        takeoffDateTime: flight[0].takeoff_date_time,
        takeoffAirport: flight[0].takeoff_airport,
        landingDateTime: flight[0].landing_date_time,
        landingAirport: flight[0].landing_airport,
        airplaneId: flight[0].airplane_id,
        passengers: passengers.map(passenger => ({
          passengerId: passenger.passenger_id,
          dni: passenger.dni,
          name: passenger.name,
          age: passenger.age,
          country: passenger.country,
          boardingPassId: passenger.boarding_pass_id,
          purchaseId: passenger.purchase_id,
          seatTypeId: passenger.seat_type_id,
          seatId: passenger.seat_id
        }))
      }
    };
  
    return transformedData
  };
  