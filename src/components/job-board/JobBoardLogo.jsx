import React from "react";

const JobBoardLogo = (props) => {
  const { name } = props;

  return (
    <div className="text-xl text-center font-bold p-6 ">
      Welcome To The Dashboard of {name}!
    </div>
  );
};

export default JobBoardLogo;
