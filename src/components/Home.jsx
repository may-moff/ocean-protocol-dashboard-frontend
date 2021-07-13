import React from 'react';
import wave from './wave/Waves.gif';
import Waves from './Waves';
import DisplayText from './DisplayText';

function Home() {
  return (
    <>
      <div className="">
        <h1 className="text-center text-bblack text-fsh1 font-fwbase mt-6">
          Ocean Dashboard
        </h1>
        {/* <img className="w-full" src={wave} alt="wave" /> */}
        {/* <Waves /> */}
        <DisplayText />
        <img className="w-full" src={wave} alt="wave" />
      </div>
      <div>
        <p className="font-fsbase"></p>
      </div>
    </>
  );
}

export default Home;
