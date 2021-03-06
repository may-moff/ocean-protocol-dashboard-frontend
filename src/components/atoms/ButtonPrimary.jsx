import React from 'react'

const ButtonPrimary = (props) => {
  return (
    <div>
      <button
        onClick={props.function}
        className={`bg-bpink text-white py-2 px-6 font-semibold text-xs md:text-base rounded transform hover:-translate-y-0.5 duration-300  ${
          props.additionalClasses || ''
        }`}
      >
        {props.name}
      </button>
    </div>
  )
}

export default ButtonPrimary
