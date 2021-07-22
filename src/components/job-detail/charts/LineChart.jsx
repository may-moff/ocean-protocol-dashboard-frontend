import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    name: 'Job A',
    uv: 4000,
    pv: 2400
  },
  {
    name: 'Job B',
    uv: 3000,
    pv: 1398
  },
  {
    name: 'Job C',
    uv: 2000,
    pv: 9800
  },
  {
    name: 'Job D',
    uv: 2780,
    pv: 3908
  }
]

const LineDataChart = () => {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={700}
      height={200}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    /* </ResponsiveContainer> */
  )
}

export default LineDataChart
