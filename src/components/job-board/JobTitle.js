import React from "react";
import ButtonDefault from "../ButtonDefault";

const JobTitle = (props) => {
  return (
    <div>
      <ButtonDefault name={props.title} />
    </div>
  );
};

export default JobTitle;
