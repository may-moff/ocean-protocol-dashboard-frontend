import { React } from 'react'
// import axios from 'axios'
import Job from './Job'
import Card from '../Card'

const JobsBoxNotTagged = () => {
  // const getJobs = ({ publicAddress }) =>
  //   fetch(
  //     `${process.env.REACT_APP_BACKEND_URL}/users/${publicAddress}/jobs`
  // //   ).then((response) => response.json())
  // // let [data, setData] = useState([])
  // // useEffect(() => {
  // //   getJobs().then((data) => setData(data))
  // // }, [])
  // const stuff = ({ publicAddress }) => {
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_BACKEND_URL}/users/${publicAddress}/jobs/index`
  //     )
  //     .then((resp) => {
  //       console.log(resp.data)
  //     })
  return (
    <div>
      {/* /* {data.map((data, i) => (
          <Card key={i} additionalClasses="flex justify-center">
            <Job
              title={data.jobName}
              // status={data.status}
              // content={content}
              // setContent={setContent}
            />
          </Card>
        ))}
        <h1></h1> */}
    </div>
  )
}

export default JobsBoxNotTagged
