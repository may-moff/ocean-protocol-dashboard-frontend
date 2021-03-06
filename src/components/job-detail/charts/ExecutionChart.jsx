import React, { useState, useEffect } from 'react'

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
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
  // For responsive design, changes value in the ResponsiveContainer for minWidth

  let [displayWidth, setDisplayWidth] = useState('')

  useEffect(() => {
    if (window.screen.width < 1024) {
      setDisplayWidth('90vw')
      console.log('window smaller than 1024')
    } else {
      setDisplayWidth('50vw')
      console.log('window bigger than 1024')
    }
  }, [])

  return (
    <>
      {/* <div className="w-max">title</div>
      <br></br> */}
      <h1 className="flex justify-center justify-items-center">{title}</h1>
      <ResponsiveContainer
        width="99%"
        minWidth={displayWidth}
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
