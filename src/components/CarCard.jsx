import  PropTypes  from "prop-types";
import React from "react"

export default function CarCard({car}){
  return(
    <div className="rounded elevation-2">
      <img src={car.imgUrl} alt={`${car.make} ${car.model}'s Image.`} title={`${car.make} ${car.model}'s Image.`}  className="img-fluid rounded relative w-100"/>
    </div>
  );
}

CarCard.propTypes = {
  car: PropTypes.object.isRequired
}