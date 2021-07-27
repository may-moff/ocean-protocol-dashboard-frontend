import React from 'react'
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
    Total: 1
  },
  {
    name: 'February',
    Total: 4
  },
  {
    name: 'March',
    Total: 10
  },
  {
    name: 'April',
    Total: 5
  },
  {
    name: 'May',
    Total: 10
  },
  {
    name: 'June',
    Total: 3
  },
  {
    name: 'July',
    Total: 1
  },
  {
    name: 'August',
    Total: 0
  },
  {
    name: 'September',
    Total: 0
  },
  {
    name: 'October',
    Total: 0
  },
  {
    name: 'November',
    Total: 0
  },
  {
    name: 'December',
    Total: 0
  }
]

const ChartTotalJobs = () => {
  return (
    <div className="tablet:h-4/5">
      <ResponsiveContainer width="100%" aspect={8}>
        <BarChart
          width={600}
          height={200}
          data={data}
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
          <Bar dataKey="Total" stackId="a" fill="#7b1173" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartTotalJobs
