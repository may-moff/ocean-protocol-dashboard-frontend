import React from 'react'

const ButtonGhost = (props) => {
  return (
    <div>
      <button
        onClick={props.function}
        class="bg-bwhite text-bgrey py-2 px-6 font-semibold text-xs 
        md:text-base rounded shadow-xl transform hover:-translate-y-0.5 duration-300"
      >
        {props.name}
      </button>
    </div>
  )
}

export default ButtonGhost
