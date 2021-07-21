import React from 'react'
// import JobTitle from './JobTitle'
// import JobStatus from './JobStatus'
import ButtonDefault from '../ButtonDefault'
import { NavLink } from 'react-router-dom'
import Card from '../Card'

const Job = ({ item }) => {
  const { date, jobName, algorithmId } = item
  return (
    <Card additionalClasses="flex-1 my-1 ">
      <div className="flex justify-center m-2 mx-auto p-4">
        <div className="font-bold">
          <h2>{`Job: ${jobName}`}</h2>
          <h2>{`Algorithm: ${algorithmId.algoName}`}</h2>
          <h2>{`Date: ${date.slice(0, 10)}`}</h2>
        </div>
      </div>
      <div className="mb-4">
        <NavLink to="/jobs/1">
          <ButtonDefault name="See Details" />
        </NavLink>
      </div>
    </Card>
  )
}

export default Job
