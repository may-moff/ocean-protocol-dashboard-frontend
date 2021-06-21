import React from "react";
import progress from "./../../Assets/In-progress.png";
import done from "./../../Assets/done.png";

const JobStatus = (props) => {
  const status = props.status === "done" ? progress : done;

  return <img className="max-w-40 max-h-40 p-8" src={status} />;
};

export default JobStatus;
