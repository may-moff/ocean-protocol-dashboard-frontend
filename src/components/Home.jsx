import React from 'react';
import Card from '../components/Card';

function Home() {
  return (
    <div className="flex-row ">
      <Card additionalClasses="text-center text-fslarge text-fwbase">
        <h1>Hello Dashboard Team!</h1>
      </Card>
    </div>
  );
}

export default Home;
