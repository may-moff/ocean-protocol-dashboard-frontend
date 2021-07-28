import React, { useState } from 'react'
import Card from './Job'
import JobsIndex from './JobsIndex'
import SearchBar from './SearchBar'
import ChartTotalJobs from './ChartTotalJobs'
import SectionHeader from './SectionHeader'
import { NavLink } from 'react-router-dom'
import ButtonDefault from '../atoms/ButtonDefault'

const Dashboard = ({ jobList, setJobList }) => {
  const [search, setSearch] = useState('')

  const filteredJobs = jobList.filter(
    (job) => job.jobName && job.jobName.toLocaleLowerCase().includes(search)
  )
  return (
    <div className="text-center p-6 w-screen ">
      <SectionHeader headline="Total Jobs" />
      <ChartTotalJobs jobList={jobList} />
      <SectionHeader headline="Jobs Overview" />
      <SearchBar
        jobList={jobList}
        setJobList={setJobList}
        keyword={search}
        setKeyword={setSearch}
      />
      <div className="bottom">
        {filteredJobs.length &&
          filteredJobs.map((job, i) => {
            return (
              <div key={i} className="cards-container">
                <h2>Job Name:</h2>
                <h2 className="font-bold pl-1">{job.jobName}</h2>

                <h2>Algorithm Name:</h2>
                <h2 className="font-bold pl-1">{job.algorithmId.algoName}</h2>

                <h2>Date:</h2>
                <h2 className="font-bold pl-1">{job.date.slice(0, 10)}</h2>
              </div>
            )
          })}

        <JobsIndex jobList={jobList} setJobList={setJobList} />
      </div>
    </div>
  )
}

export default Dashboard
