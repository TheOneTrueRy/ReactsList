import { observer } from 'mobx-react-lite';
import React, { useEffect } from "react";
import { AppState } from "../AppState.js";
import CarCard from "../components/CarCard.jsx";
import { carsService } from "../services/CarsService.js";
import Pop from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js";
import { jobsService } from "../services/JobsService.js";

  function HomePage() {

    async function getCars(){
      try {
        await carsService.getCars()
      }
      catch (error){
        Pop.error(error.message, 'Getting Cars');
      }
    }

    async function getHouses(){
      try {
        await housesService.getHouses()
      }
      catch (error){
        Pop.error(error);
      }
    }

    async function getJobs(){
      try {
        await jobsService.getJobs()
      }
      catch (error){
        Pop.error(error);
      }
    }
  
    useEffect(()=>{
      getCars()
    }, [])

  const cars = AppState.cars
  const houses = AppState.houses
  const jobs = AppState.jobs

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