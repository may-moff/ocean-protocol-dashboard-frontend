import React, { useState, useEffect, useCallback } from 'react'
import { getMonthFromDate } from '../helpers/textManipulation'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
    total: 2
  },
  {
    name: 'April',
    total: 2
  },
  {
    name: 'May',
    total: 3
  },
  {
    name: 'June',
    total: 2
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

const CharttotalJobs = ({ jobList }) => {
  const [jobCount, setJobCount] = useState(data)

  const newJobCount = useCallback(() => {
    const output = [...data]
    jobList.forEach((job) => {
      const currentMonth = getMonthFromDate(job.date)
      const index = output.findIndex((x) => x.name === currentMonth)
      output[index].total++
    })
    setJobCount(output)
  }, [jobList])

  useEffect(() => newJobCount(), [newJobCount])

  return (
    <div className="tablet:h-4/5">
      <ResponsiveContainer width="100%" aspect={8}>
        <BarChart
          width={600}
          height={200}
          data={jobCount}
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
    </div>
  )
}

export default CharttotalJobs
