import React from "react";
import JobTitle from "./JobTitle";
import JobStatus from "./JobStatus";
import JobFileDownload from "./JobFileDownload";
import ButtonDefault from "../ButtonDefault";

const Job = (props) => {
  return (
    <div className="flex-1 my-1 ">
      <div className="flex justify-between m-2 mx-auto p-4">
        <div className="font-bold">
          <JobTitle title={props.title} />
        </div>
        <div className="">
          <JobStatus status={props.status} />
        </div>
      </div>
      <div className="justify-center m-4 overflow-hidden">
        <p>Date of Purchase </p>
      </div>
      <div className="mb-4">
        <ButtonDefault name="See Details" />
      </div>
    </div>
  );
};

export default Job;
