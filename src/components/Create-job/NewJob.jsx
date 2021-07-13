import React from 'react';
import FileUpload from '../Create-job/FileUpload';

const NewJob = ({ content, setContent }) => {
  return (
    <div className="text-center p-6 ">
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-6 m-6 ">
        Create New Job
      </div>
<<<<<<< HEAD
      <div className="flex justify-center justify-items-center   ">
        <FileUpload ontent={content} setContent={setContent} />
=======
      <div className="flex flex-col justify-center justify-items-center"></div>
      <div className="flex justify-center justify-items-center">
        <FileUpload />
>>>>>>> b8ef871c6ef71e1736b0f73db4a0ee3e176ffa0a
      </div>
    </div>
  );
};

export default NewJob;
