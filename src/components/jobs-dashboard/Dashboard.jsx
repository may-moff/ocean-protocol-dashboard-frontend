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

      <JobsIndex
        jobList={jobList}
        setJobList={setJobList}
        keyword={search}
        setKeyword={setSearch}
      />
    </div>
  )
}

export default Dashboard
