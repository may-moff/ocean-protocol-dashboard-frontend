import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../axiosConfig'
import ButtonDefault from '../atoms/ButtonDefault'
import ChartTime from './charts/ChartTime'
import ExecutionChart from './charts/ExecutionChart'
import LineDataChart from './charts/LineChart'
import RadarDataChart from './charts/RadarDataChart'
import SectionHeader from '../jobs-dashboard/SectionHeader'
import Table from './table/Table'
import UserContext from '../../contexts/UserContext'
import MOCK_DATA3 from './table/MOCK_DATA3.json'

const testDataGenerator = (entryData, dataKey) => {
  const colors = { primary: '#7b1173', secondary: '#8b98a9' }

  const currentJobValue = entryData.currentJob.parseKeys.filter(
    (e) => e.key.toLowerCase() === dataKey.toLowerCase()
  )
  const otherJobsValues = entryData.otherJobs.map((e) =>
    e.parseKeys.filter((x) => x.key.toLowerCase() === dataKey.toLowerCase())
  )
  const currentJobInfo = {
    _id: entryData.currentJob._id,
    jobName: entryData.currentJob.jobName,
    value: parseInt(currentJobValue[0].value),
    color: colors.primary
  }

  const otherJobsInfo = entryData.otherJobs.map((e, i) => {
    return {
      _id: e._id,
      jobName: e.jobName,
      value: parseInt(otherJobsValues[i][0].value),
      color: colors.secondary
    }
  })

  return [currentJobInfo, ...otherJobsInfo]
}

const JobDetail = () => {
  let { _id } = useParams()
  const [jobDetail, setJobDetail] = useState([])
  const { userId } = useContext(UserContext)
  console.log(userId)
  const getOneJob = () => {
    console.log('im in he fucton')
    console.log(userId)
    axios.get(`/users/${userId}/jobs/${_id}`).then((response) => {
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
  const data = testDataGenerator(MOCK_DATA3, 'EXECUTION_TIME')

  return (
    <div className=" p-6 ">
      <SectionHeader headline={displayData ? displayData.jobName : null} />
      <div className=" flex justify-around text-xl border-md text-center border rounded-sm p-2 bg-bgreylighter">
        <div className="flex flex-col w-1/2 justify-around">
          <div className="place-content-center font-bold">PARSED INFO:</div>
          <div className="place-content-center mt-3">
            <div className="place-content-center">
              <strong>Algorithm Name: </strong>
              {displayData ? displayData.algorithmId.algoName : null}
            </div>
            <div className="place-content-center">
              <strong>Data Name:</strong>{' '}
              {displayData ? displayData.dataName : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around w-1/2">
          <div className="place-content-center mb-2 font-bold">
            AVAILABLE VISUALIZATIONS:
          </div>
          <div className="m-2 flex flex-row justify-around">
            <ButtonDefault name="Execution time" />
            <ButtonDefault name="Job time details" />
            <ButtonDefault name="Comperation" />
          </div>
        </div>
      </div>
      <div className="flex justify-between justify-items-center h-155">
        <div className=" max-h-full w-5/12 overflow-auto mt-8 ml-4">
          <Table />
        </div>
        <div className="flex flex-col justify-items-center w-7/12 max-w-full">
          <div className="max-h-full max-w-full block m-auto mt-10 h-155">
            {MOCK_DATA3.currentJob.parseKeys.map((e, i) => {
              if (e.dataType === 'number') {
                return (
                  <ExecutionChart
                    key={i}
                    data={testDataGenerator(MOCK_DATA3, e.key)}
                    title={e.key}
                    yLabel={e.key}
                  />
                )
              }
              return null
            })}
            <ExecutionChart data={data} title="title" yLabel="time (ms)" />
            <div className="flex">
              <ChartTime />
              <RadarDataChart />
            </div>
            <LineDataChart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
