import React from 'react';
import JobTitle from './JobTitle';
import JobStatus from './JobStatus';
import JobFileDownload from './JobFileDownload';
import ButtonDefault from '../ButtonDefault';

const Job = (props) => {
  return (
    <div>
      <JobTitle title={props.title} />
      <JobStatus status={props.status} />
      {/* <JobFileDownload /> */}
      <ButtonDefault name="Download" />
    </div>
  );
};

export default Job;
