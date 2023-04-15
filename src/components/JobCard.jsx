import  PropTypes  from "prop-types";
import React from "react"

export default function JobCard({job}){
  return(
    <div className="rounded elevation-2 text-center border border-dark p-4 d-flex flex-column w-100">
      <span className="fs-4 pb-1">
        {job.company}
      </span>
      <span className="fs-5 pb-1">
        {job.jobTitle}
      </span>
      <span>
        ${job.rate}/hr
      </span>
    </div>
  );
}

JobCard.propTypes = {
  job: PropTypes.object.isRequired
}