import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA3 from './MOCK_DATA3.json'
import { COLUMNS } from './columns'
import './table.css'

const Table = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(
    () => MOCK_DATA3.currentJob.parseKeys.filter((e) => e.visualize),
    []
  )

  console.log(data)

  const tableInstance = useTable({
    columns,
    data
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance

  return (
    <table className="border-collapse" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className="sticky top-0 border border-solid p-2 py-3 text-left bg-bgreylight"
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr className="hover:bg-bgreylight" {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className="border border-solid p-2"
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
