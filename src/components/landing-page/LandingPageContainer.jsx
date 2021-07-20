import React from 'react'
import LandingPageTile from './LandingPageTile'
import home from './house-slow.gif'
import metamask from './logo-metamask-1.png'
import logo from './template-animation.gif'
import ocean from './ocean-transparent.gif'
// import waves from './waves.svg'
import manta from './mantaray-grid.svg'
import dao from './dao.png'

const LandingPageContainer = () => {
  return (
    <div>
      <h1
        class="text-5xl p-10 "
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
        <img src={logo} style={{ height: '75vh' }} />
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
            background={manta}
            text="Ocean Market"
            url="https://market.oceanprotocol.com/"
          />
          <LandingPageTile
            background={dao}
            text="Get involved in the project"
            url="https://oceanprotocol.com/dao"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPageContainer
