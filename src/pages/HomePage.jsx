import { observer } from 'mobx-react-lite';
import React, { useEffect } from "react";
import { AppState } from "../AppState.js";
import CarCard from "../components/CarCard.jsx";
import { carsService } from "../services/CarsService.js";
import Pop from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js";
import { jobsService } from "../services/JobsService.js";
import HouseCard from "../components/HouseCard.jsx";
import JobCard from "../components/JobCard.jsx";

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
  const houses = AppState.houses
  const jobs = AppState.jobs

  return (
    <div className="container-fluid mt-2 mb-4">
      <div className="bricks">
        {cars.map(car => (
          <div key={car.id}>
            <CarCard car={car}/>
          </div>
          ))}
        {houses.map(house => (
          <div key={house.id}>
            <HouseCard house={house}/>
          </div>
        ))}
        {jobs.map(job => (
          <div key={job.id}>
            <JobCard job={job}/>
          </div>
        ))}
      </div>
    </div>
  )
}
export default observer(HomePage)