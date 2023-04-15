import  PropTypes  from "prop-types";
import React from "react"

export default function JobCard({job}){
  return(
    <div className="rounded elevation-2">
      <img src={job.imgUrl} className="img-fluid rounded w-100 relative"/>
      <div className="px-1 py-1 absolute">
        <span className="text-light text-shadow">
        {job.jobTitle} at {job.company} - ${job.rate}/hr
        </span>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  job: PropTypes.object.isRequired
}