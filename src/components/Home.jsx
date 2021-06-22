import React from 'react';
import Card from '../components/Card';

function Home() {
  return (
    <Card additionalClasses="">
      <div>
        <img
          className="inline mb-3 h-20 w-20"
          src="https://oceanpearl.io/_nuxt/img/pearl-logo.e8cfc25.svg"
          alt="logo"
        />
      </div>
      <h1 className="text-align-center text-bpink text-fslarge font-fwbold mb-8">
        Hello Dashboard Team!
      </h1>
      <p className="font-fsbase">Lorem Ipsum</p>
    </Card>
  );
}

export default Home;
