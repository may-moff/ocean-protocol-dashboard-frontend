import React from "react";
import MenuBox from "./MenuBox";
import JobsBox from "./JobsBox";

const JobBoard = () => {
  return (
    <div className="text-center p-6 ">
      <MenuBox name="User's name" />
      <JobsBox />
    </div>
  );
};

export default JobBoard;
