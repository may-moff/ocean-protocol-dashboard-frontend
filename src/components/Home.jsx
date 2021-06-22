import React from 'react';
import jellyfish from "./../Assets/jellyfish-full.svg"
import wave from "./wave/Waves.gif"

function Home() {
  return (
    <>
    <div className="">
      <h1 className="text-center text-bblack text-fsh1 font-fwbase mt-6">
        Ocean Dashboard
      </h1>
      <img className="w-full" src={wave} alt="wave" />
    </div>
      <div>
        <img
          className="inline mb-3 max-w-12 max-h-12"
          src={jellyfish} 
          alt="logo"
        />
      </div>
      <div>
   
      <p className="font-fsbase"></p>
      </div>
      </>
  )};

export default Home;
