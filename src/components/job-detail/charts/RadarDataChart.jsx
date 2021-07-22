import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts'

const data = [
  {
    subject: 'Job A',
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: 'Job B',
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'Job C',
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'Job D',
    A: 99,
    B: 100,
    fullMark: 150
  }
]

const RadarDataChart = () => {
  return (
    // <ResponsiveContainer width="50%%" aspect={2}>
    <RadarChart
      cx="50%"
      cy="50%"
      outerRadius="70%"
      data={data}
      width={400}
      height={400}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
    /* </ResponsiveContainer> */
  )
}

export default RadarDataChart
