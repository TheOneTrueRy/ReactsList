import React from "react";
import { housesService } from "../services/HousesService.js";
import Pop from "../utils/Pop.js";
import { jobsService } from "../services/JobsService.js";

export function Navbar() {
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
        <img src="https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0" alt="" height={40}/>
        <span className="fs-2">
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
        <ul className="navbar-nav me-auto">
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
        </ul>
      </div >
    </nav >
  )
}