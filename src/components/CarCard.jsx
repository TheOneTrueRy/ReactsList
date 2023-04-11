import  PropTypes  from "prop-types";
import React from "react"

export default function CarCard({car}){
  return(
    <div className="rounded elevation-2">
      <img src={car.imgUrl} alt={`${car.make} ${car.model}'s Image.`} title={`${car.make} ${car.model}'s Image.`}  className="img-fluid rounded w-100 relative"/>
      <div className="px-1 py-1 absolute">
        <span className="text-light text-shadow">
        {car.make} {car.model} - ${car.price}
        </span>
      </div>
    </div>
  );
}

CarCard.propTypes = {
  car: PropTypes.object.isRequired
}