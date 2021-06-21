import React from 'react';
import jellyfish from "./../Assets/jellyfish-full.svg"
import wave from "./wave/Waves.gif"

function Home() {
  return (
    <>
    <div className=" m-auto">
      <h1 className="text-center text-bblack text-fsh1 font-fwbase p-6">
        Welcome to the dashdoard
      </h1>
      <img src={wave} alt="wave" />
    </div>
      <div>
        <img
          className="inline mb-3"
          src={jellyfish} 
          alt="logo"
        />
      </div>
      <div>
   
      <p className="font-fsbase">Lorem Ipsum</p>
      </div>
      </>
  )};

export default Home;
