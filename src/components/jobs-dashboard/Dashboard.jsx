import React from 'react'
import JobsIndex from './JobsIndex'

import ChartTotalJobs from './ChartTotalJobs'
import SectionHeader from './SectionHeader'

const Dashboard = ({ jobList, setJobList }) => {
  return (
    <div className="text-center p-6 w-screen ">
      <SectionHeader headline="Total Jobs" />
      <ChartTotalJobs jobList={jobList} />
      <SectionHeader headline="Jobs Overview" />
      <JobsIndex jobList={jobList} setJobList={setJobList} />
    </div>
  )
}

export default Dashboard
