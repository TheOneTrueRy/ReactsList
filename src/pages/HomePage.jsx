import { observer } from 'mobx-react-lite';
import React, { useEffect } from "react";
import { AppState } from "../AppState.js";
import CarCard from "../components/CarCard.jsx";
import { carsService } from "../services/CarsService.js";
import Pop from "../utils/Pop.js";
import HouseCard from "../components/HouseCard.jsx";
import JobCard from "../components/JobCard.jsx";
import { Car } from "../models/Car.js";
import { BindEditable } from '../utils/FormHandler.js';

  function HomePage() {

    let editable = {...AppState.car || new Car({})}
    let bindEditable = BindEditable(editable)

    async function getCars(){
      try {
        await carsService.getCars()
      }
      catch (error){
        Pop.error(error.message, 'Getting Cars');
      }
    }

    async function createCar(){
      try {
        window.event.preventDefault()
        const carData = editable
        await carsService.createCar(carData)
        editable = new Car({})
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
          <button data-bs-toggle="modal" data-bs-target="#listingModal" className="btn btn-success">
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
  <div className="modal fade" id="listingModal" tabIndex={-1} role="dialog" aria-labelledby="listingModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="listingModalLabel">List Your Car!</h5>
        </div>
          <form onSubmit={createCar} key={editable.id}>
        <div className="modal-body">
            <label htmlFor="make">Make</label>
            <input required placeholder="Vehicle Make..." type="text" id="make" name="make" value={editable.make} onChange={bindEditable} className="form-control"/>
            <label htmlFor="model">Model</label>
            <input required placeholder="Vehicle Model..." type="text" id="model" name="model" value={editable.model}  onChange={bindEditable}className="form-control"/>
            <label htmlFor="imgUrl">Img URL</label>
            <input required placeholder="Img URL..." type="url" id="imgUrl" name="imgUrl" value={editable.imgUrl} onChange={bindEditable} className="form-control"/>
            <label htmlFor="year">Year</label>
            <input required placeholder="Vehicle Year..." type="number" id="year" name="year" value={editable.year}  onChange={bindEditable}className="form-control"/>
            <label htmlFor="price">Price</label>
            <input required placeholder="Listing Price..." type="number" id="price" name="price" value={editable.price}  onChange={bindEditable}className="form-control"/>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" value={editable.description} onChange={bindEditable} cols={30} rows={10} className="form-control"></textarea>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button data-bs-dismiss="modal" type="submit" className="btn btn-primary">List Car</button>
        </div>
          </form>
      </div>
    </div>
  </div>
</div>
  )
}
export default observer(HomePage)