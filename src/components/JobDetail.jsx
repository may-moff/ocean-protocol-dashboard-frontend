import React from "react";
import { useParams } from "react-router-dom";
import ChartTime from "./ChartTime";

const JobDetail = () => {
  const { id } = useParams();
  return (
    <div className="">
      <div className="flex justify-center justify-items-center">
        Job number {id}
      </div>
      <div className="flex justify-center justify-items-center">
        <ChartTime />
      </div>
    </div>
  );
};

export default JobDetail;
