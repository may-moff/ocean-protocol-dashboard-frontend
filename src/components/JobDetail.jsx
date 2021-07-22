import React, { useState, useEffect, useContext } from 'react'
import ChartTime from './ChartTime'
import Table from './job-detail/Table/Table'
import SectionHeader from './jobs-dashboard/SectionHeader'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

const JobDetail = () => {
  let { _id } = useParams()
  const { userId } = useContext(UserContext)

  const getOneJob = () =>
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/${userId}/jobs/${_id}`)
      .then((response) => response.data)
  const [jobDetail, setJobDetail] = useState([])
  console.log('hellllooo')

  useEffect(() => {
    getOneJob().then((data) => setJobDetail(data))
  }, [])
  console.log(jobDetail)
  console.log('liiiiii')

  return (
    jobDetail && (
      <>
        <div className=" p-6 ">
          {jobDetail.map((stuff, i) => (
            <>
              <SectionHeader />
              <div className="flex justify-between justify-items-center h-155">
                <div className=" w-1/2">
                  <div className="flex flex-col place-content-center font-bold">
                    <h1 className="bg-bgreylighter flex place-content-center py-3"></h1>
                    <h1 className="bg-bgreylighter flex place-content-center py-3"></h1>
                  </div>
                  <div className=" max-h-full overflow-auto ">
                    <Table />
                  </div>
                </div>
                <div className="flex justify-end justify-items-center w-1/2">
                  <ChartTime />
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    )
  )
}

export default JobDetail
