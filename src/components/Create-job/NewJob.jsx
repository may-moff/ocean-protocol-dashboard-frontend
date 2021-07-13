import React from 'react';
import FileUpload from '../Create-job/FileUpload';

const NewJob = ({ setContent, pubblicAddress }) => {
  return (
    <div className="text-center p-6 ">
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-6 m-6 ">
        Create New Job
      </div>
      <div className="flex flex-col justify-center justify-items-center"></div>
      <div className="flex justify-center justify-items-center">
        <FileUpload setContent={setContent} pubblicAddress={pubblicAddress} />
      </div>
    </div>
  );
};

export default NewJob;
