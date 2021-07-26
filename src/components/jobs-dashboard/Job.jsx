import React from 'react'
import ButtonDefault from '../atoms/ButtonDefault'
import { NavLink } from 'react-router-dom'
import Card from '../atoms/Card'

const Job = ({ item }) => {
  const { date, jobName, algorithmId, _id } = item
  console.log(item)
  return (
    <Card additionalClasses="flex-1 my-1 ">
      <div className="flex justify-center m-2 mx-auto p-4 flex-col">
        <div className="font-bold">
          <h2>{jobName}</h2>
        </div>
        <div className="flex justify-center mx-auto">
          <h2>Algorithm Name:</h2>
          <h2 className="font-bold pl-1">{algorithmId.algoName}</h2>
        </div>
        <div className="flex justify-center mx-auto">
          <h2>Date:</h2>
          <h2 className="font-bold pl-1">{date.slice(0, 10)}</h2>
        </div>
      </div>
      <div className="mb-4">
        <NavLink to={`/jobs/${_id}`}>
          <ButtonDefault name="See Details" />
        </NavLink>
      </div>
    </Card>
  )
}

export default Job
