import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
// import Job from './Job'
import Card from '../Card'
import UserContext from '../../contexts/UserContext'

const JobsBoxNotTagged = () => {
  const { userId } = useContext(UserContext)

  const getJobs = () =>
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/${userId}/jobs`)
      .then((response) => response.data)
  const [jobList, setJobList] = useState([])

  useEffect(() => {
    getJobs().then((data) => setJobList(data))
  }, [])
  console.log(jobList)

  return (
    jobList && (
      <div>
        {jobList.map((item, i) => (
          <>
            <h1>{item.date}</h1>
            <h1>{item.jobName}</h1>
            <h1>{item.algorithmId.algoName}</h1>
            {/* <h1>{item.algoName}</h1> */}
          </>
          // <Card
          //   key={i}
          //   additionalClasses="flex justify-center"
          //   nunu={item.jobName}
          //   nana={item.date}
          //   // content={content}
          //   // setContent={setContent}
          // ></Card>
        ))}
        <h1>REMEMBER MEEEE!!!!</h1>
      </div>
    )
  )
}

export default JobsBoxNotTagged
