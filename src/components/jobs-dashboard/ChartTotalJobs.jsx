import React from 'react'
import { getMonthFromDate } from '../../helpers/textManipulation'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    name: 'January',
    total: 0
  },
  {
    name: 'February',
    total: 0
  },
  {
    name: 'March',
    total: 6
  },
  {
    name: 'April',
    total: 3
  },
  {
    name: 'May',
    total: 9
  },
  {
    name: 'June',
    total: 5
  },
  {
    name: 'July',
    total: 0
  },
  {
    name: 'August',
    total: 0
  },
  {
    name: 'September',
    total: 0
  },
  {
    name: 'October',
    total: 0
  },
  {
    name: 'November',
    total: 0
  },
  {
    name: 'December',
    total: 0
  }
]

const ChartTotalJobs = ({ jobList }) => {
  const newJobCount = (jobs) => {
    const output = data.map((e) => ({ ...e }))
    jobs.forEach((job) => {
      const currentMonth = getMonthFromDate(job.date)
      const index = output.findIndex((x) => x.name === currentMonth)
      output[index].total++
    })
    return output
  }

  return (
    <div className="tablet:h-4/5">
      {jobList.length > 0 && (
        <ResponsiveContainer width="100%" aspect={8}>
          <BarChart
            width={600}
            height={200}
            data={newJobCount(jobList)}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            {/* <Bar dataKey="Tagged" stackId="a" fill="#8b98a9" /> */}
            <Bar dataKey="total" stackId="a" fill="#7b1173" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default ChartTotalJobs
