import React from 'react'
import MOCK_DATA from '../Table/MOCK_DATA.json'
import MOCK_DATA2 from '../Table/MOCK_DATA.json'
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

const generateExecutionChartData = (entryData) => {
  const found = entryData.find((element) => element.key === 'EXECUTION_TIME')
  let value = parseInt(found.value)

  return [
    {
      name: 'Job A',
      Speed: value
    },
    {
      name: 'Job B',
      Speed: 13
    },
    {
      name: 'Job C',
      Speed: 48
    },
    {
      name: 'Job D',
      Speed: 39
    }
  ]
}

const ExecutionChart = () => {
  return (
    // <ResponsiveContainer width="100%" aspect={5}>
    <BarChart
      width={700}
      height={200}
      data={generateExecutionChartData(MOCK_DATA)}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 20 }} />
      <YAxis
        label={{ value: 'time (ms)', angle: -90, position: 'insideLeft' }}
      />
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="Speed" fill="#8884d8" background={{ fill: '#eee' }} />
    </BarChart>
    // </ResponsiveContainer>
  )
}

export default ExecutionChart
