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
import {
  findValueWithMeasureUnit,
  normalizeValue
} from '../../helpers/textManipulation'

const testDataGenerator = (entryData, dataKey) => {
  const colors = { primary: '#7b1173', secondary: '#8b98a9' }

  const currentJobValue = entryData.currentJob.parseKeys.filter(
    (e) => e.key.toLowerCase() === dataKey.toLowerCase()
  )
  const otherJobsValues = entryData.otherJobs.map((e) =>
    e.parseKeys.filter((x) => x.key.toLowerCase() === dataKey.toLowerCase())
  )

  const currentJobUM =
    currentJobValue[0].dataType === 'number_um'
      ? findValueWithMeasureUnit(currentJobValue[0].value)
      : null
  const currentJobInfo = {
    _id: entryData.currentJob._id,
    jobName: entryData.currentJob.jobName,
    title: normalizeValue(dataKey),
    value: currentJobUM ? currentJobUM.val : currentJobValue[0].value,
    color: colors.primary,
    unitOfMeasure: currentJobUM ? currentJobUM.unit : '-'
  }

  const otherJobsUM = otherJobsValues.map((e) =>
    e[0].dataType === 'number_um' ? findValueWithMeasureUnit(e[0].value) : null
  )
  const otherJobsInfo = entryData.otherJobs.map((e, i) => {
    return {
      _id: e._id,
      jobName: e.jobName,
      title: normalizeValue(dataKey),
      value: otherJobsUM[i] ? otherJobsUM[i].val : otherJobsValues[i][0].value,
      color: colors.secondary,
      unitOfMeasure: currentJobInfo.unitOfMeasure
    }
  })

  return [currentJobInfo, ...otherJobsInfo]
}

const JobDetail = () => {
  let { _id } = useParams()
  const [jobDetail, setJobDetail] = useState()
  const { userId } = useContext(UserContext)

  const getOneJob = () => {
    axios.get(`/users/${userId}/jobs/${_id}`).then((response) => {
      setJobDetail(response.data)
      console.log(response.data)
    })
  }

  useEffect(() => {
    getOneJob()
  }, [])

  const dataToPlot = jobDetail?.currentJob?.parseKeys
    .map((e, i) => {
      if (e.dataType === 'number' || e.dataType === 'number_um') {
        return testDataGenerator(jobDetail, e.key)
      }
      return null
    })
    .filter((e) => e !== null)
  const data = testDataGenerator(MOCK_DATA3, 'EXECUTION_TIME')

  return (
    <div className=" p-6 ">
      <div className="border-md shadow-xl text-center border rounded-sm p-4 m-4 ">
        <div className="text-xl font-bold p-2">
          {jobDetail ? jobDetail.currentJob.jobName : null}
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col w-1/2 justify-around">
            <div className="place-content-center">Parsed Assets:</div>
            <div className="place-content-center mt-3">
              <div className="place-content-center">
                Algorithm Name:{' '}
                <strong>
                  {' '}
                  {jobDetail ? jobDetail.currentJob.algorithmId.algoName : null}
                </strong>
              </div>
              <div className="place-content-center">
                Data Name:{' '}
                <strong>
                  {jobDetail ? jobDetail.currentJob.dataName : null}
                </strong>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around w-1/2">
            <div className="place-content-center mb-2">
              Available Visualizations:
            </div>
            {/* <div className="m-2 flex flex-row justify-around">
            <ButtonDefault name="Execution time" />
            <ButtonDefault name="Job time details" />
            <ButtonDefault name="Comperation" />
          </div> */}
          </div>
        </div>
      </div>
      <div className="flex justify-between justify-items-center h-146 tablet:flex tablet:flex-row tablet:w-full tablet:flex-wrap">
        <div className="  w-5/12 overflow-y-auto mt-8 ml-4 tablet:w-full">
          <Table />
        </div>

        {/* {MOCK_DATA3.currentJob.parseKeys.map((e, i) => {
              if (e.dataType === 'number' || e.dataType === 'number_um') {
                return (
                  <ExecutionChart
                    key={i}
                    data={testDataGenerator(MOCK_DATA3, e.key)}
                    title={e.key}
                    yLabel={e.dataType === 'number' ? '-' : e.unitOfMeasure}
                  />
                )
              }
              return null
            })} */}

        <div className="flex flex-col justify-items-center w-7/12 max-w-full tablet:w-full tablet:flex-row tablet:flex-wrap">
          <div className=" overflow-y-auto max-w-full block m-auto mt-10">
            {dataToPlot.map((e, i) => {
              if (e) {
                return (
                  <>
                    <div className="tablet:pb-5 tablet:pt-5 tablet:h-1/2">
                      <div className="w-full flex pl-20">{e[0].title}</div>
                      <ExecutionChart
                        key={i}
                        data={e}
                        title={e[0].key}
                        yLabel={
                          e[0].dataType === 'number' ? '-' : e[0].unitOfMeasure
                        }
                      />
                    </div>
                  </>
                )
              }
              return null
            })}
            <div>
              {' '}
              <LineDataChart />
            </div>
            <div className="flex">
              <div className="w-1/2 tablet:w-full tablet:flex tablet:flex-column tablet:flex-wrap">
                <div className="tablet:w-full tablet:flex tablet:flex-wrap ">
                  <ChartTime />
                </div>
                <div className="w-1/2 tablet:w-full">
                  <RadarDataChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
