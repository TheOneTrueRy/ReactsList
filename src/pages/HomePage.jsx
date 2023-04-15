import { observer } from 'mobx-react-lite';
import React, { useEffect } from "react";
import { AppState } from "../AppState.js";
import CarCard from "../components/CarCard.jsx";
import { carsService } from "../services/CarsService.js";
import Pop from "../utils/Pop.js";
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
  const displaying = AppState.displaying

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
      <div className="fixed-bottom pb-1 pe-2 text-end">
        {displaying == 'cars' && 
          <button className="btn btn-success">
            <span className="fs-5">
              List A Car 🚗
            </span>
          </button>}
        {displaying == 'houses' && 
          <button className="btn btn-success">
            <span className="fs-5">
              List A House 🏡
            </span>  
          </button>}
        {displaying == 'jobs' && 
          <button className="btn btn-success">
            <span className="fs-5">
              List A Job 👷
            </span>  
          </button>}
        </div>
    </div>
  )
}
export default observer(HomePage)