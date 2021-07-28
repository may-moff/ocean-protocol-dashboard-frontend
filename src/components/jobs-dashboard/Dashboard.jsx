import React from 'react'
import JobsIndex from './JobsIndex'
import waves from './../../assets/waves.svg'
import ChartTotalJobs from './ChartTotalJobs'
import SectionHeader from './SectionHeader'

const Dashboard = ({ jobList, setJobList }) => {
  return (
    <div className="text-center p-6 w-screen ">
      <SectionHeader headline="Total Jobs" />
      <ChartTotalJobs jobList={jobList} />

      <SectionHeader headline="Jobs Overview" />

      <div
        className="bg-fixed"
        style={{
          backgroundImage: `url(${waves})`,
          zIndex: '-10',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '110%',
          backgroundPosition: 'center'
        }}
      >
        {' '}
        <JobsIndex jobList={jobList} setJobList={setJobList} />
      </div>
    </div>
  )
}

export default Dashboard
