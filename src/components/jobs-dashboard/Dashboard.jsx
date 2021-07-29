import React, { useState, useEffect, useContext } from 'react'
import axios from '../../axiosConfig'
import waves from './../../assets/waves.svg'
import ChartTotalJobs from './ChartTotalJobs'
import JobsIndex from './JobsIndex'
import SearchBar from './SearchBar'
import SectionHeader from './SectionHeader'
import UserContext from '../../contexts/UserContext'

const Dashboard = ({ jobList, setJobList }) => {
  const [search, setSearch] = useState('')
  const { userId } = useContext(UserContext)
  const getJobs = () =>
    axios.get(`/users/${userId}/jobs`).then((response) => response.data)

  useEffect(() => {
    getJobs().then((data) => {
      const sortedData = data.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      )

      setJobList(sortedData)
    })
  }, [])

  return (
    <div className="text-center p-6 w-screen ">
      <SectionHeader headline="Total Jobs" />
      <ChartTotalJobs jobList={jobList} />

      <SectionHeader headline="Jobs Overview" />
      <SearchBar
        jobList={jobList}
        setJobList={setJobList}
        search={search}
        setSearch={setSearch}
      />
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
        <JobsIndex jobList={jobList} search={search} />
      </div>
    </div>
  )
}

export default Dashboard
