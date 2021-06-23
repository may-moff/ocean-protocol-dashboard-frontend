import React from "react";
import Job from "./Job";
import Card from "../Card";

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
    <div className="container mx-auto flex justify-around">
      <div className="grid grid-cols-3 gap-8">
        {fakeData.map((data, i) => (
          <Card key={i} additionalClasses="flex justify-center">
            <Job title={data.title} status={data.status} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobsBox;
