import { React } from 'react'
import axios from 'axios'
import Job from './Job'
import Card from '../Card'

const JobsBoxNotTagged = ({ publicAddress }) => {
  const stuff = axios
    .get(
      `${process.env.REACT_APP_BACKEND_URL}/users/${publicAddress}/jobs/index`
    )
    .then((resp) => {
      console.log(resp.data)
    })
  return (
    <div>
      {stuff.map((data, i) => (
        <Card key={i} additionalClasses="flex justify-center">
          <Job
            title={stuff.jobName}
            // status={data.status}
            // content={content}
            // setContent={setContent}
          />
        </Card>
      ))}
      <h1></h1>
    </div>
  )
}

export default JobsBoxNotTagged
