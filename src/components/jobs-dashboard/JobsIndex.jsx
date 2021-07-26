import { useState, useEffect, useContext } from 'react'
import axios from '../../axiosConfig'
import Job from './Job'
import UserContext from '../../contexts/UserContext'
import JobsSeed from './JobsSeed'

const JobsIndex = () => {
  const { userId } = useContext(UserContext)

  const getJobs = () =>
    axios.get(`/users/${userId}/jobs`).then((response) => response.data)
  const [jobList, setJobList] = useState([])

  useEffect(() => {
    getJobs().then((data) => setJobList(data))
  }, [])
  console.log(jobList)

  return (
    jobList && (
      <>
        <div className="container mx-auto flex justify-around">
          <div className="grid grid-cols-3 gap-8">
            {jobList.map((item, i) => (
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
