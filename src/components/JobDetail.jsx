import React from "react";
import { useParams } from "react-router-dom";
import ChartTime from "./ChartTime";
import FormParse from "./FormParse";

const JobDetail = (props) => {
  const { id } = useParams();
  return (
    <div className="text-center p-6 ">
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-6 m-6 ">
        Job Number 1
      </div>
      <div className=" flex justify-between justify-items-center h-screen">
        <div className="p-4 m-4 ">
          <FormParse />
        </div>
        {/* <div className="flex flex-col justify-center justify-items-center ">
          <div className="flex justify-center justify-items-center"></div>
          <ChartTime />
        </div> */}
      </div>
    </div>
  );
};

export default JobDetail;
