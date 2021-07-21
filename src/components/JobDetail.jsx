import React from 'react'
import ChartTime from './ChartTime'
import Table from './JobDetail/Table/Table'
import SectionHeader from './Job-dashboard/SectionHeader'

const JobDetail = () => {
  return (
    <div className=" p-6 ">
      <SectionHeader headline="Job Name (this should be jobName)" />
      <div className="flex justify-between justify-items-center h-155">
        <div className=" w-1/2">
          <div className="flex flex-col place-content-center font-bold">
            <h1 className="bg-bgreylighter flex place-content-center py-3">
              {'Data name: '}
            </h1>
            <h1 className="bg-bgreylighter flex place-content-center py-3">
              Algorithm name:
            </h1>
          </div>
          <div className=" max-h-full overflow-auto ">
            <Table />
          </div>
        </div>
        <div className="flex justify-end justify-items-center w-1/2">
          <ChartTime />
        </div>
      </div>
    </div>
  )
}

export default JobDetail
