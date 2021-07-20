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
            window.location.href = url
            // openInNewTab(url)
          } else {
            history.push(push)
          }
        }}
        class="shadow-2xl flex space-x-4 text-xl transform hover:scale-110 motion-reduce:transform-none"
        style={{
          // backgroundImage: `url(${background})`,
          // backgroundRepeat: 'no-repeat',
          width: '500px',
          height: '210px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
          // border: '3px'
        }}
      >
        <img
          src={background}
          style={{
            height: '180px'
          }}
        />
        <div>{text}</div>
      </button>
    </div>
  )
}

export default LandingPageTile
