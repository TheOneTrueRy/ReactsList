import React from "react";
import { housesService } from "../services/HousesService.js";
import Pop from "../utils/Pop.js";
import { jobsService } from "../services/JobsService.js";
import { carsService } from "../services/CarsService.js";

export function Navbar() {
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
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 elevation-2">
      <div className="d-flex align-items-center">
        <img src="https://iwantmyname.com/new/images/about/logo-react-js.png" alt="React Logo" height={40}/>
        <span className="fs-2 ps-1">
          ReactsList
        </span>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        {/* <ul className="navbar-nav me-auto">
          <li>
            <span>
              Cars
            </span>
          </li>
          <li>
            <span>
              Houses
            </span>
          </li>
          <li>
            <span>
              Jobs
            </span>
          </li>
        </ul> */}
        <div>
          <button className="btn btn-dark mobile-margin" onClick={getCars}>
            <span>
              Cars
            </span>
          </button>
        </div>
        <div>
          <button className="btn btn-dark mobile-margin" onClick={getHouses}>
            <span>
              Houses
            </span>
          </button>
        </div>
        <div>
          <button className="btn btn-dark mobile-margin" onClick={getJobs}>
            <span>
              Jobs
            </span>
          </button>
        </div>
      </div >
    </nav >
  )
}