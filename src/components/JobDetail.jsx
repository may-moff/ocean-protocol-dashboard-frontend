import React from 'react'
import ChartTime from './JobDetail/Charts/ChartTime'
import Table from './JobDetail/Table/Table'
import ExecutionChart from './JobDetail/Charts/ExecutionChart'
import LineDataChart from './JobDetail/Charts/LineChart'
import ButtonPrimary from './ButtonPrimary'

const JobDetail = () => {
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
              <ButtonPrimary name="Execution time" />
              <ButtonPrimary name="Job time details" />
              <ButtonPrimary name="Comperation" />
            </div>
          </div>
          <div className="max-h-full max-w-full block m-auto mt-10 h-155">
            <ExecutionChart />
            <LineDataChart />
            <ChartTime />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail
