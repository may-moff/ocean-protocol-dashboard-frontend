import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA3 from './MOCK_DATA3.json'
import './table.css'
import {
  localizeTimeStamp,
  normalizeValue
} from '../../../helpers/textManipulation'

const Table = (props) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Key',
        accessor: 'key',
        minWidth: '10px',
        maxWidth: '50px',
        width: '40px'
      },
      // {
      //   Header: 'Type',
      //   accessor: 'dataType',
      //   minWidth: '10px',
      //   maxWidth: '50px',
      //   width: '20px'
      // },
      {
        Header: 'Value',
        accessor: 'value',
        maxWidth: '180px',
        minWidth: '100px',
        width: '120px'
      }
    ],
    []
  )

  const data = useMemo(
    () =>
      MOCK_DATA3.currentJob.parseKeys
        .filter((e) => e.visualize)
        .map((e) => {
          const output = { ...e, key: normalizeValue(e.key) }
          if (e.dataType === 'timestamp') {
            output.value = localizeTimeStamp(e.value)
          }
          return output
        }),
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
    <table className=" border-collapse break-all w-full" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className="sticky top-0 border border-solid p-2 py-3 text-left bg-bgreylight"
                {...column.getHeaderProps({
                  style: { minWidth: column.minWidth, width: column.width }
                })}
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
                    className="border border-solid py-3"
                    {...cell.getCellProps({
                      style: {
                        minWidth: cell.column.minWidth,
                        width: cell.column.width
                      }
                    })}
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
