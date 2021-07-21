import React from 'react'
// import JobTitle from './JobTitle'
// import JobStatus from './JobStatus'
import ButtonDefault from '../ButtonDefault'
import { NavLink } from 'react-router-dom'

const Job = (props) => {
  return (
    <div className="flex-1 my-1 ">
      <div className="flex justify-between m-2 mx-auto p-4">
        <div className="font-bold">
          {/* <JobTitle title={props.jobName} />
        </div>
        <div className="">
          <JobStatus status={props.date} /> */}
        </div>
      </div>
      <div className="justify-center m-4 overflow-hidden">
        <p>Date of Purchase </p>
      </div>
      <div className="mb-4">
        <NavLink to="/jobs/1">
          <ButtonDefault name="See Details" />
        </NavLink>
      </div>
    </div>
  )
}

export default Job
