import React from 'react'

const ButtonDefault = (props) => {
  return (
    <div>
      <button
        onClick={props.function}
        className="bg-bgreylight text-white py-2 px-6 font-semibold text-xs 
        md:text-base rounded transform hover:-translate-y-0.5 duration-300 tablet:px-2"
      >
        {props.name}
      </button>
    </div>
  )
}

export default ButtonDefault
