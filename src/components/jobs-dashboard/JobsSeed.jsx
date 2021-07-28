import React from 'react'
import ButtonDefault from '../atoms/ButtonDefault'
import { NavLink } from 'react-router-dom'
import Card from '../atoms/Card'

const JobsSeed = (props) => {
  return (
    <Card additionalClasses="flex-1 my-1 bg-white z-100">
      <div className="flex justify-center m-2 mx-auto p-4 flex-col">
        <div className="flex justify-center mx-auto">
          <h2>Job Name:</h2>
          <h2 className="font-bold pl-1">{props.name}</h2>
        </div>
        <div className="flex justify-center mx-auto">
          <h2>Algorithm Name:</h2>
          <h2 className="font-bold pl-1">{props.algo}</h2>
        </div>
        <div className="flex justify-center mx-auto">
          <h2>Date:</h2>
          <h2 className="font-bold pl-1">{props.date.slice(0, 10)}</h2>
        </div>
      </div>
      <div className="mb-4">
        <NavLink to="/jobs/60f6d6b701d6a8757253e890">
          <ButtonDefault name="See Details" />
        </NavLink>
      </div>
    </Card>
  )
}

export default JobsSeed
