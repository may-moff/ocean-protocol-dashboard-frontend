import React from 'react'

const SectionHeader = (props) => {
  return (
    <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-6 m-6 ">
      {props.headline}
    </div>
  )
}

export default SectionHeader
