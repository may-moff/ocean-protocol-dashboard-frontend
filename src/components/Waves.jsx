import { useLayoutEffect, useRef } from 'react'
import * as d3 from 'd3'

const useD3 = (renderChartFn, dependencies) => {
  const ref = useRef()

  useLayoutEffect(() => {
    renderChartFn(d3.select(ref.current))
    return () => {}
  }, dependencies)
  return ref
}

const Waves = () => {
  const ref = useD3((svg) => {
    const width = 2000
    const height = +svg.attr('height')
    const x = d3.scaleLinear().range([0, width])
    const angles = d3.range(0, 4 * Math.PI, Math.PI / 20)

    const path = svg
      .append('g')
      .attr('transform', `translate(${width / 48}, ${height / 2})`)
      .attr('fill', 'none')
      .attr('stroke-width', 2)
      .selectAll('path')
      .data(['#FF4092', '#E000CF', '#8B98A9', '#E2E2E2'])
      .enter()
      .append('path')
      .attr('stroke', (d) => {
        return d
      })
      .style('mix-blend-mode', 'darken')
      .datum((d, i) => {
        return d3
          .line()
          .curve(d3.curveBasisOpen)
          .x((angles) => {
            return x(angles / 4)
          })
          .y((angles) => {
            const t = d3.now() / 3000
            return (
              Math.cos(angles * 8 - (i * 2 * Math.PI) / 10 + t) *
              Math.pow((2 + Math.cos(angles - t)) / 2, 4) *
              15
            )
          })
      })

    d3.timer(() => {
      path.attr('d', (d) => {
        return d(angles)
      })
    })
  }, [])

  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: '100%',
        marginRight: '0px',
        marginLeft: '0px',
        maxWidth: '100%',
        transform: 'scale(1.2) rotate(-8deg)'
      }}
    />
  )
}

export default Waves
