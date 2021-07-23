import { useState, useEffect, useContext } from 'react'
import axios from '../../axiosConfig'
import Job from './Job'
import UserContext from '../../contexts/UserContext'

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
          </div>
        </div>
      </>
    )
  )
}

export default JobsIndex
