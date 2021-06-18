import React from "react";
import turtle from "./../../Assets/turtle.gif";
import wheel from "./../../Assets/turtle.gif";

const JobStatus = (props) => {
  const status = props.status;
  if (status == "done") {
    return <img src={turtle} />;
  }
  return <img src={wheel} />;
};

export default JobStatus;
