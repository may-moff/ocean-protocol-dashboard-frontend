import React from 'react'
import MOCK_DATA from '../Table/MOCK_DATA.json'
import MOCK_DATA2 from '../Table/MOCK_DATA.json'
import {
  BarChart,
  Bar,
  Cell,
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

const colors = ['#303030', '#7b1173']

const ExecutionChart = () => {
  const data = generateExecutionChartData(MOCK_DATA)
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
      <Bar
        dataKey="Speed"
        // fill={('#303030', '#7b1173')}
        background={{ fill: '#eee' }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Bar>
    </BarChart>
    // </ResponsiveContainer>
  )
}

export default ExecutionChart
