import React, { useCallback, useState } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Job A', value: 40 },
  { name: 'Job B', value: 30 },
  { name: 'Job C', value: 30 },
  { name: 'Job D', value: 20 }
]

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#7b1173"
      >{`${value}ms.`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#7b1173"
      >
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

const ChartTime = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index)
    },
    [setActiveIndex]
  )

  // For responsive design, changes value in the ResponsiveContainer for minWidth

  //  let [displayWidth, setDisplayWidth] = useState('')

  //  useEffect(() => {
  //    if (window.screen.width < 1024) {
  //      setDisplayWidth('90vw')
  //      console.log('window smaller than 1024')
  //    } else {
  //      setDisplayWidth('50vw')
  //      console.log('window bigger than 1024')
  //    }
  //  }, [])

  return (
    <div className="place-content-center content-center tablet:pt-10 tablet:flex tablet:justify-center">
      <ResponsiveContainer width="99%" minHeight="300px" aspect={0}>
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={130}
            cy={130}
            innerRadius={60}
            outerRadius={80}
            fill="#7b1173"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartTime
