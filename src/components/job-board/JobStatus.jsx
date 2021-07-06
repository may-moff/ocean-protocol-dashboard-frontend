import React from "react";
import progress from "./../../Assets/In-progress.jpeg";
import done from "./../../Assets/done.png";

const JobStatus = (props) => {
  const status = props.status === "done" ? progress : done;

  return <img className="w-8 h-8" src={status} />;
};

export default JobStatus;
