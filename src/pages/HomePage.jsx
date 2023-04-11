import { observer } from 'mobx-react-lite';
import React, { useEffect } from "react";
import { AppState } from "../AppState.js";
import CarCard from "../components/CarCard.jsx";
import { carsService } from "../services/CarsService.js";
import Pop from "../utils/Pop.js";

  function HomePage() {

    async function getCars(){
      try {
        await carsService.getCars()
      }
      catch (error){
        Pop.error(error.message, 'Getting Cars');
      }
    }
  
    useEffect(()=>{
      getCars()
    }, [])

  const cars = AppState.cars

  return (
    <div className="container-fluid mt-2">
      <div className="bricks">
        {cars.map(car => (
          <div key={car.id}>
        <CarCard car={car}/>
        </div>
          ))}
      </div>
    </div>
  )
}
export default observer(HomePage)