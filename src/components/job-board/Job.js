import React from 'react';
import JobTitle from './JobTitle';
import JobStatus from './JobStatus';
import JobFileDownload from './JobFileDownload';
import dotenv_expand from 'dotenv-expand';

const Job = (props) => {
  return (
    <div>
      <JobTitle title={props.title} />
      <JobStatus status={props.status} />
      <JobFileDownload />
    </div>
  );
};

export default Job;
