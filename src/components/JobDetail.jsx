import React from 'react'
import ChartTime from './JobDetail/Charts/ChartTime'
import Table from './JobDetail/Table/Table'
import ExecutionChart from './JobDetail/Charts/ExecutionChart'
import LineDataChart from './JobDetail/Charts/LineChart'
import ButtonDefault from './ButtonDefault'
import RadarDataChart from './JobDetail/Charts/RadarDataChart'
import MOCK_DATA3 from './JobDetail/Table/MOCK_DATA3.json'

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
  const data = testDataGenerator(MOCK_DATA3, 'EXECUTION_TIME')

  return (
    <div className=" p-6 ">
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-2 mb-4 ">
        Job Name
      </div>
      <div className="flex justify-between justify-items-center h-150">
        <div className=" w-1/2">
          <div className="flex flex-col place-content-center font-bold">
            <h1 className="bg-bgreylighter flex place-content-center py-3">
              PARSED INFO:
            </h1>
            <h1 className="bg-bgreylighter flex place-content-center py-3">
              Algorithm name: xxxxx Data name: xxxxx
            </h1>
          </div>
          <div className=" max-h-full max-w-max overflow-auto ">
            <Table />
          </div>
        </div>
        <div className="flex flex-col justify-items-center w-1/2 max-w-full">
          <div className="flex flex-col place-content-center font-bold">
            <h1 className="bg-bgreylighter flex place-content-center py-3">
              AVAILABLE VISUALIZATIONS:
            </h1>
            <div className="bg-bgreylighter flex justify-around place-content-center py-3">
              <ButtonDefault name="Execution time" />
              <ButtonDefault name="Job time details" />
              <ButtonDefault name="Comperation" />
            </div>
          </div>
          <div className="max-h-full max-w-full block m-auto mt-10 h-155">
            <ExecutionChart data={data} title="title" yLabel="time (ms)" />
            <LineDataChart />
            <div className="flex">
              <ChartTime />
              <RadarDataChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
