import React from 'react'
import LandingPageTile from './LandingPageTile'
import ocean from './../../assets/landing-page/ocean-transparent.gif'
import manta from './../../assets/landing-page/mantaray-grid.svg'
import dao from '../../assets/landing-page/oceandao-logo.png'
import pearl from './../../assets/landing-page/ocean-pearl.png'
import logo from './../../assets/landing-page/template-animation.gif'

const LandingPageContainer = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="flex justify-center text-center flex-nowrap text-5xl p-10 tablet:p-2 tablet:text-3xl">
          <div className="tablet:hidden">Welcome to the</div>
          &nbsp;<b> Ocean Protocol Dashboard!</b>
        </h1>
      </div>
      <div>
        <div className="flex flex-row flex-wrap justify-center tablet:p-0">
          <img src={logo} className="w-3/12 tablet:h-auto tablet:w-4/12" />

          <div className="flex flex-column-wrap justify-center w-1/2 tablet:w-screen tablet:text-2xl tablet:w-4/5">
            <div className="text-3xl text-justify pb-5 leading-normal w-10/12 pt-4 justify-center tablet:w-10/12 tablet:text-2xl">
              Parsing and displaying results of compute-to-data log files has
              never been easier.
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
          <div className="flex w-full flex-row flex-wrap justify-evenly">
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
