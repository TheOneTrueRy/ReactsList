import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import Pop from './utils/Pop.js'
import { carsService } from "./services/CarsService.js"


export function App() {

  async function getCars(){
    try {
      await carsService.getCars()
    }
    catch (error){
      Pop.error(error);
    }
  }

  useEffect(() => {
    getCars()
  })

  return (
    <div className="App" id="app">
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

    </div>
  )
}
