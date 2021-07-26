import React from 'react'
import JobsIndex from './JobsIndex'
import JobsSeed from './JobsSeed'
import ChartTotalJobs from '../ChartTotalJobs'
import SectionHeader from './SectionHeader'

const Dashboard = (props) => {
  return (
    <div className="text-center p-6 w-screen ">
      <SectionHeader headline="Total Jobs" />
      <ChartTotalJobs />
      <SectionHeader headline="Jobs Overview" />
      <JobsIndex />
    </div>
  )
}

export default Dashboard
