import React from 'react'
import LandingPageTile from './LandingPageTile'
import background from './background.jpg'
import metamask from './logo-metamask-1.png'
import logo from './mantaray-full.svg'
import ocean from './favicon-black.png'

const LandingPageContainer = () => {
  return (
    <div>
      <h1
        class="text-5xl"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        Welcome to the Ocean Protocol dashboard!
      </h1>
      <h2
        class="float-center text-3xl fwbold pl-10"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        This tool will help you parse and visualize data you are working with
      </h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '50px',
          flexWrap: 'wrap'
        }}
      >
        <img src={logo} style={{ height: '50vh', padding: '50px' }} />
        <div style={{ flexDirection: 'column', padding: '50px' }}>
          <LandingPageTile
            background={background}
            text="This is first button"
            push="/home"
          />

          <LandingPageTile
            // style={{ display: 'flex', alignItems: 'flex-end' }}
            background={metamask}
            text="Learn more about metamask"
            url="https://www.metamask.io"
          />
          <LandingPageTile
            background={ocean}
            text="Ocean Protocol Home"
            url="https://https://oceanprotocol.com/"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPageContainer
