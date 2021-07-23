import React from 'react'
import ChartTime from './charts/ChartTime'
import Table from './table/Table'
import ExecutionChart from './charts/ExecutionChart'
import LineDataChart from './charts/LineChart'
import ButtonDefault from '../atoms/ButtonDefault'
import RadarDataChart from './charts/RadarDataChart'
import SectionHeader from '../jobs-dashboard/SectionHeader'
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
  const data = testDataGenerator(MOCK_DATA3, 'EXECUTION_TIME')

  return (
    <div className=" p-6 ">
      <SectionHeader headline="Job Name" />
      <div className="text-xl border-md text-center border rounded-sm p-2 bg-bgreylighter">
        <div className="flex flex-col">
          <div className="flex justify-around font-bold">
            <h1 className="bg-bgreylighter flex place-content-center">
              PARSED INFO:
            </h1>
            <h1 className="bg-bgreylighter flex place-content-center">
              AVAILABLE VISUALIZATIONS:
            </h1>
          </div>
          <div className="flex justify-around m-1">
            <h1 className="bg-bgreylighter flex place-content-center">
              Algorithm name: xxxxx Data name: xxxxx
            </h1>
            <div className="bg-bgreylighter flex justify-between m-2">
              <ButtonDefault name="Execution time" />
              <ButtonDefault name="Job time details" />
              <ButtonDefault name="Comperation" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between justify-items-center h-155">
        <div className=" w-5/12">
          <div className=" max-h-full max-w-full overflow-auto mt-8">
            <Table />
          </div>
        </div>
        <div className="flex flex-col justify-items-center w-7/12 max-w-full">
          <div className="max-h-full max-w-full block m-auto mt-10 h-155">
            {MOCK_DATA3.currentJob.parseKeys.map((e) => {
              if (e.dataType === 'number') {
                return (
                  <ExecutionChart
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
