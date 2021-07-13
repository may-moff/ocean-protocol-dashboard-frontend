import React from 'react';
import FileUpload from '../Create-job/FileUpload';

const NewJob = ({ content, setContent }) => {
  return (
    <div className="text-center p-6 ">
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-6 m-6 ">
        Create new Job
      </div>
      <div className="flex justify-center justify-items-center   ">
        <FileUpload ontent={content} setContent={setContent} />
      </div>
    </div>
  );
};

export default NewJob;
