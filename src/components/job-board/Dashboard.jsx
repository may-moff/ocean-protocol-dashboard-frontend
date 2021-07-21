import React from 'react'
import JobsBoxNotTagged from './JobsBoxNotTagged'
import ChartTotalJobs from '../ChartTotalJobs'
import SectionHead from './SectionHead'

const Dashboard = () => {
  return (
    <div className="text-center p-6 ">
      <SectionHead headline="Total Jobs" />
      <ChartTotalJobs />
      <SectionHead headline="Jobs Overview" />
      <JobsBoxNotTagged />
    </div>
  )
}

export default Dashboard
