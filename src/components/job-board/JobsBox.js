import React from "react";

const fakeData = [
  { title: "Job Number 1", status: "done" },
  { title: "Job Number 2", status: "done" },
  { title: "Job Number 3", status: "in progres" },
  { title: "Job Number 4", status: "done" },
  { title: "Job Number 5", status: "done" },
  { title: "Job Number 6", status: "in progres" },
  { title: "Job Number 7", status: "done" },
  { title: "Job Number 8", status: "done" },
  { title: "Job Number 9", status: "done" },
];

const JobsBox = () => {
  return (
    <div>
      <Job props={fakeData} />
    </div>
  );
};

export default JobsBox;
