import React from 'react'
import JobsIndex from './JobsIndex'
import ChartTotalJobs from '../ChartTotalJobs'
import SectionHeader from './SectionHeader'

const Dashboard = () => {
  return (
    <div className="text-center p-6">
      <SectionHeader headline="Total Jobs" />
      <ChartTotalJobs />
      <SectionHeader headline="Jobs Overview" />
      <JobsIndex />
    </div>
  )
}

export default Dashboard
