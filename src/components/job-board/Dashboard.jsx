import React from 'react'
import JobsBoxNotTagged from './JobsBoxNotTagged'
// import JobsBoxHistory from './JobsBoxHistory'
import ChartTotalJobs from '../ChartTotalJobs'

const Dashboard = ({ publicAddress }) => {
  return (
    <div className="text-center p-6 ">
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-6 m-6 ">
        Total Jobs
      </div>
      <ChartTotalJobs />
      <JobsBoxNotTagged publicAddress={publicAddress} />
      {/* <JobsBoxHistory /> */}
    </div>
  )
}

export default Dashboard
