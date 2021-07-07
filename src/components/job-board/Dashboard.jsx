import React from "react";
import MenuBoxNotTagged from "./MenuBoxNotTagged";
import JobsBoxNotTagged from "./JobsBoxNotTagged";
import JobsBoxHistory from "./JobsBoxHistory";

const Dashboard = () => {
  return (
    <div className="text-center p-6 ">
      <JobsBoxNotTagged />
      <JobsBoxHistory />
    </div>
  );
};

export default Dashboard;
