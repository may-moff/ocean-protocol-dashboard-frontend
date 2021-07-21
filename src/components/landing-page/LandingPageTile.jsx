import React from 'react'
import { useHistory } from 'react-router-dom'

const LandingPageTile = (props) => {
  const { background, text, push, url } = props
  const history = useHistory()

  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  //   if (newWindow) newWindow.opener = null

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <button
        onClick={() => {
          if (url !== null) {
            window.open(url, '_blank')
          } else {
            history.push(push)
          }
        }}
        class="shadow-2xl flex space-x-4 text-xl transform hover:scale-110 motion-reduce:transform-none"
        style={{
          width: '350px',
          height: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          src={background}
          style={{
            height: '80%'
          }}
        />
        <div>{text}</div>
      </button>
    </div>
  )
}

export default LandingPageTile