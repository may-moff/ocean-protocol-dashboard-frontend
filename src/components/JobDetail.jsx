import React, { useState, useEffect, useContext } from 'react'
import ChartTime from './ChartTime'
import Table from './job-detail/Table/Table'
import SectionHeader from './jobs-dashboard/SectionHeader'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import UserContext from '../contexts/UserContext'

const JobDetail = () => {
  let { _id } = useParams()
  const [jobDetail, setJobDetail] = useState([])
  const { userId } = useContext(UserContext)
  console.log(userId)

  const getOneJob = () => {
    console.log('im in he fucton')
    console.log(userId)
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users/${userId}/jobs/${_id}`)
      .then((response) => {
        setJobDetail(response.data)
        console.log(response.data)
        return response.data
      })
  }

  console.log('hellllooo')

  useEffect(() => {
    getOneJob()
  }, [])

  const displayData = jobDetail.find((e) => e._id === _id)

  return (
    <>
      <div className=" p-6 ">
        <>
          <SectionHeader headline={displayData.jobName} />
          <div className="flex justify-between justify-items-center h-155">
            <div className=" w-1/2">
              <div className="flex flex-col place-content-center font-bold">
                <h1 className="bg-bgreylighter flex place-content-center py-3">
                  {/* {jobDetail.algorithmId.algoName} */}
                </h1>
                <h1 className="bg-bgreylighter flex place-content-center py-3">
                  Data Name: {displayData.dataName}
                </h1>
              </div>
              <div className=" max-h-full overflow-auto ">
                <Table {...displayData} />
              </div>
            </div>
            <div className="flex justify-end justify-items-center w-1/2">
              <ChartTime {...displayData} />
            </div>
          </div>
        </>
      </div>
    </>
  )
}

export default JobDetail
