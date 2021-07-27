import React from 'react'

const ButtonDefault = (props) => {
  return (
    <div>
      <button
        onClick={props.function}
        className="bg-bgreylight text-white py-2 px-6 pt-2 pr-2 font-semibold rounded transform hover:-translate-y-0.5 duration-300 
        tablet:px-2"
      >
        {props.name}
      </button>
    </div>
  )
}

export default ButtonDefault
