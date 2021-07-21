import React from 'react'
import LandingPageTile from './LandingPageTile'
import ocean from './ocean-transparent.gif'
import manta from './mantaray-grid.svg'
import dao from '../../Assets/landing-page/dao.png'
import pearl from './ocean-pearl.png'
import logo from './template-animation.gif'

const LandingPageContainer = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1
          class="text-5xl p-10 "
          style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center'
          }}
        >
          Welcome to the &nbsp;<b> Ocean Protocol Dashboard!</b>
        </h1>
        <div>
          {/* <h2
            class="float-center text-5xl fwbold pl-10"
            style={{
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center'
            }}
          >
            Parse and visualize
          </h2> */}
        </div>
      </div>
      <div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            padding: '50px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <img src={logo} style={{ height: '40vh', paddingRight: '12vw' }} />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              width: '50vw',
              justifyContent: 'center'
            }}
          >
            <div
              class="text-3xl"
              style={{
                width: '35vw',
                textAlign: 'justify',
                lineHeight: '1.5em',
                paddingBottom: '5vh',
                justifyContent: 'center'
              }}
            >
              Parsing and displaying results of algorithm work has never been
              easier.
              <p style={{ color: '#A3AEB7' }}>
                This tool allows you to summarize the log in a clear and
                understandable way. All the results at one glance. Take
                advantage of an automatic parsing tool that also allows you to
                customize the key-value pairs you actually need. All packed in
                an easy and approachable layout that is an eye candy for hard
                working data scientists!{' '}
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              width: '100vw',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly'
            }}
          >
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
            <LandingPageTile
              background={pearl}
              text="Projects Showcase"
              url="https://oceanpearl.io/"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPageContainer
