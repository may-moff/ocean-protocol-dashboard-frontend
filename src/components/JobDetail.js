import React from "react";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  return <div>This is the id number {id}</div>;
};

export default JobDetail;
