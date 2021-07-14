import React, { useState } from "react";
import FileUpload from "../Create-job/FileUpload";
import FormParse from "../FormParse";
import { useParams } from "react-router-dom";
import ButtonPrimary from "../ButtonPrimary";

const handleSubmit = () => {
  console.log("Submit All");
};

const NewJob = ({ content, setContent }) => {
  const [logReady, setLogReady] = useState(false);
  const { id } = useParams();
  return (
    <div className="text-center p-6">
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-6 m-2 ">
        Create New Job
        {logReady && (
          <div className="m-2">
            {" "}
            <ButtonPrimary function={handleSubmit} name="Submit All" />{" "}
          </div>
        )}
      </div>
      <div className="flex">
        <div className="flex justify-center justify-items-center w-2/5">
          <FileUpload
            logReady={logReady}
            setLogReady={setLogReady}
            setContent={setContent}
          />
        </div>
        <div className="flex justify-center justify-items-center w-3/5 ">
          <FormParse
            logReady={logReady}
            content={content}
            setContent={setContent}
          />
        </div>
      </div>
    </div>
  );
};

export default NewJob;
