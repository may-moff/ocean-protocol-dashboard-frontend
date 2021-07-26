import React from 'react'
import ButtonDefault from '../atoms/ButtonDefault'
import { NavLink } from 'react-router-dom'
import Card from '../atoms/Card'

const JobsSeed = (props) => {
  return (
    <Card additionalClasses="flex-1 my-1 ">
      <div className="flex justify-center m-2 mx-auto p-4">
        <div className="font-bold">
          <h2>{props.name}</h2>
          <h2>Algorithm Name: {props.algo}1</h2>
          <h2>Date: {props.date}</h2>
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
