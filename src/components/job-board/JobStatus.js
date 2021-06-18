import React from 'react';
import turtle from './../../Assets/turtle.gif';
import wheel from './../../Assets/wheel.gif';

const JobStatus = (props) => {
  const status = props.status === 'done' ? turtle : wheel;

  return <img src={status} />;
};

export default JobStatus;
