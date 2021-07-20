import React from 'react'
import LandingPageTile from './LandingPageTile'
import home from './home.gif'
import metamask from './logo-metamask-1.png'
import logo from './template-animation.gif'
import ocean from './ocean-transparent.gif'

const LandingPageContainer = () => {
  return (
    <div>
      <h1
        class="text-5xl p-10"
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        Welcome to the Ocean Protocol dashboard!
      </h1>
      <h2
        class="float-center text-3xl fwbold pl-10"
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center'
        }}
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
        <img src={logo} style={{ height: '1000px', padding: '0px' }} />
        <div style={{ flexDirection: 'column', padding: '50px' }}>
          <LandingPageTile
            background={home}
            text="Dashboard Home"
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
            url="https://oceanprotocol.com/"
          />
          <LandingPageTile
            background={ocean}
            text="Ocean Protocol Home"
            url="https://oceanprotocol.com/"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPageContainer
