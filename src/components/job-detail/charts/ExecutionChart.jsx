import React from 'react'
import MOCK_DATA from '../table/MOCK_DATA.json'
import MOCK_DATA2 from '../table/MOCK_DATA2.json'
import MOCK_DATA3 from '../table/MOCK_DATA3.json'
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

// const testDataGenerator = (entryData, dataKey) => {
//   const colors = { primary: '#7b1173', secondary: '#8b98a9' }

//   const currentJobValue = entryData.currentJob.parseKeys.filter(
//     (e) => e.key.toLowerCase() === dataKey.toLowerCase()
//   )
//   const otherJobsValues = entryData.otherJobs.map((e) =>
//     e.parseKeys.filter((x) => x.key.toLowerCase() === dataKey.toLowerCase())
//   )
//   const currentJobInfo = {
//     _id: entryData.currentJob._id,
//     jobName: entryData.currentJob.jobName,
//     value: parseInt(currentJobValue[0].value),
//     color: colors.primary
//   }

//   const otherJobsInfo = entryData.otherJobs.map((e, i) => {
//     return {
//       _id: e._id,
//       jobName: e.jobName,
//       value: parseInt(otherJobsValues[i][0].value),
//       color: colors.secondary
//     }
//   })

//   return [currentJobInfo, ...otherJobsInfo]
// }

const ExecutionChart = ({ data, yLabel, title }) => {
  return (
    <>
      <h1 className="flex justify-center justify-items-center"></h1>
      <ResponsiveContainer
        width="99%"
        minHeight="100px"
        maxHeight="250px"
        aspect={4}
      >
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
          barSize={50}
        >
          <XAxis
            dataKey="jobName"
            scale="point"
            padding={{ left: 40, right: 40 }}
          />
          <YAxis
            label={{
              value: yLabel,
              angle: -90,
              position: 'insideBottomLeft'
            }}
          />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            dataKey="value"
            // fill={('#303030', '#7b1173')}
            background={{ fill: '#eee' }}
          >
            {data.map((e, i) => (
              <Cell key={i} fill={e.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default ExecutionChart
