import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../axiosConfig'
import ChartTime from './charts/ChartTime'
import ExecutionChart from './charts/ExecutionChart'
import LineDataChart from './charts/LineChart'
import RadarDataChart from './charts/RadarDataChart'
import Table from './table/Table'
import UserContext from '../../contexts/UserContext'
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

  const getOneJob = useCallback(async () => {
    const response = await axios.get(`/users/${userId}/jobs/${_id}`)
    setJobDetail(response.data)
  }, [_id, userId])

  useEffect(() => {
    getOneJob()
  }, [getOneJob])

  const dataToPlot = jobDetail?.currentJob?.parseKeys
    .map((e) => {
      if (e.dataType === 'number' || e.dataType === 'number_um') {
        return testDataGenerator(jobDetail, e.key)
      }
      return null
    })
    .filter((e) => e !== null)

  return (
    <div className=" p-6 ">
      <div className="border-md shadow-xl text-center border rounded-sm p-4 m-4 ">
        <div className="text-xl font-bold p-2">
          {jobDetail ? jobDetail.currentJob.jobName : null}
        </div>
        <div className="flex justify-around mr-20">
          <div className="flex flex-col w-1/2 justify-around mr-">
            <div className="place-content-center">Parsed Assets:</div>
            <div className="place-content-center mt-3">
              <div className="flex place-content-center place-items-center">
                Algorithm Name:{' '}
                <div className="font-bold mx-4 text-xl">
                  {' '}
                  {jobDetail ? jobDetail.currentJob.algorithmId.algoName : null}
                </div>
              </div>
              <div className="flex place-content-center place-items-center">
                Data Name:{' '}
                <div className="font-bold mx-4 text-xl">
                  {jobDetail ? jobDetail.currentJob.dataName : null}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-around w-1/2">
            <div className="place-content-center mt-2">
              Available Visualizations:
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between justify-items-center h-146 tablet:flex tablet:flex-row tablet:w-full tablet:flex-wrap">
        <div className="  w-5/12 overflow-y-auto mt-8 ml-6 tablet:w-full">
          {jobDetail && <Table jobDetail={jobDetail} />}
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
          <div className=" overflow-y-auto max-w-full block mt-10">
            {dataToPlot &&
              dataToPlot.map((e, i) => {
                if (e) {
                  return (
                    <>
                      <div
                        key={i}
                        className="tablet:pb-5 tablet:pt-5 tablet:h-1/2"
                      >
                        <div className="w-full flex pl-20">{e[0].title}</div>
                        <ExecutionChart
                          data={e}
                          title={e[0].key}
                          yLabel={
                            e[0].dataType === 'number'
                              ? '-'
                              : e[0].unitOfMeasure
                          }
                        />
                      </div>
                    </>
                  )
                }
                return null
              })}
            <div className="pb-20 pt-10">
              {' '}
              <LineDataChart />
            </div>
            <div className="flex justify-center">
              <div className="w-1/2 tablet:w-full tablet:flex tablet:flex-column tablet:flex-wrap">
                <div className="pl-10 tablet:w-full tablet:flex tablet:flex-wrap ">
                  <ChartTime />
                </div>
                <div className="w-full tablet:w-full">
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
