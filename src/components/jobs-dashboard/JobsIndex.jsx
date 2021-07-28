import { useEffect, useContext } from 'react'
import axios from '../../axiosConfig'
import Job from './Job'
import UserContext from '../../contexts/UserContext'
import JobsSeed from './JobsSeed'
import { useState } from 'react'

const JobsIndex = ({ jobList, setJobList, search, setSearch }) => {
  const { userId } = useContext(UserContext)
  const [test, setTest] = useState('')
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
  console.log(jobList)

  useEffect(() => {
    const filteredJobs = jobList.filter(
      (job) => job
      //   (job.algorithmId.algoName &&
      //     job.algorithmId.algoName.toLocaleLowerCase().includes(search)) ||
      //   (job.jobName && job.jobName.toLocaleLowerCase().includes(search))
    )
    // setTest([
    //   {
    //     jobName: 'bla',
    //     algorithmId: { algoName: 'ja' },
    //     date: '2021-07-28T16:50:47.801Z'
    //   }
    // ])
    setTest(filteredJobs)
  }, [jobList, search])

  return (
    test && (
      <>
        <div className="container mx-auto flex justify-around">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {test.map((item, i) => (
              <Job key={i} item={item} />
            ))}
            <JobsSeed
              name="Automotive Line 1"
              algo="Algo23-4tf"
              date="2021-06-20"
            />

            <JobsSeed
              name="Automotive Line 1"
              algo="Algo23-4tf"
              date="2021-06-12"
            />
            <JobsSeed
              name="Testing Phase 3"
              algo="056-AG02"
              date="2021-05-20"
            />
            <JobsSeed
              name="Testing Phase 3"
              algo="056-AG02"
              date="2021-05-18"
            />
            <JobsSeed
              name="Testing Phase 3"
              algo="056-AG02"
              date="2021-05-17"
            />
            <JobsSeed
              name="Testing Phase 2"
              algo="Algo23-4tf"
              date="2021-04-10"
            />
            <JobsSeed
              name="Testing Phase 2"
              algo="Algo23-4tf"
              date="2021-04-11"
            />
            <JobsSeed name="Testing Phase 1" algo="H1T3-45" date="2021-03-28" />
            <JobsSeed name="Testing Phase 1" algo="H1T3-45" date="2021-03-27" />
          </div>
        </div>
      </>
    )
  )
}

export default JobsIndex
