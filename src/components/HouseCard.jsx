import  PropTypes  from "prop-types";
import React from "react"

export default function HouseCard({house}){
  return(
    <div className="rounded elevation-2">
      <img src={house.imgUrl} className="img-fluid rounded w-100 relative"/>
      <div className="px-1 py-1 absolute">
        <span className="text-light text-shadow">
        {house.bedrooms} Bed. {house.bathrooms} Bath. - ${house.price}
        </span>
      </div>
    </div>
  );
}

HouseCard.propTypes = {
  house: PropTypes.object.isRequired
}