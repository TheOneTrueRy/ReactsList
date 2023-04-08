import React, { useState } from "react";
import { AppState } from "../AppState.js";
import CarCard from "../components/CarCard.jsx";

export default function HomePage() {

  const [cars] = useState(AppState.cars)

  return (
    <div className="container-fluid">
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