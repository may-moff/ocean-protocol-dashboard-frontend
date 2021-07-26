import React from 'react'
import { useHistory } from 'react-router-dom'

const LandingPageTile = (props) => {
  const { background, text, push, url } = props
  const history = useHistory()

  return (
    <div className="p-5 flex items-center flex-col">
      <button
        onClick={() => {
          if (url !== null) {
            window.open(url, '_blank')
          } else {
            history.push(push)
          }
        }}
        className="shadow-2xl flex flex-col justify-center items-center space-x-4 text-xl transform 
        hover:-translate-y-0.5 duration-300 w-80 h-36 mobile:py-2 mobile:px-4 mobile:border
         mobile:border-oceanpurple mobile:rounded mobile:border-8"
        // style={{
        //   width: '350px',
        //   height: '150px'
        // }}
      >
        <img className="h-4/5" src={background} />
        <div>{text}</div>
      </button>
    </div>
  )
}

export default LandingPageTile
