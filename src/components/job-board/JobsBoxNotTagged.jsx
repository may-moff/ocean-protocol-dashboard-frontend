import React from "react";
import Job from "./Job";
import Card from "../Card";

const fakeDataNotTagged = [
  { title: "Job Number 1", status: "done" },
  { title: "Job Number 2", status: "done" },
  { title: "Job Number 3", status: "done" },
];

const JobsBoxNotTagged = () => {
  return (
    <div>
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-6 m-6 ">
        Jobs to be tagged
      </div>
      <div className="container mx-auto flex justify-around">
        <div className="grid grid-cols-3 gap-8">
          {fakeDataNotTagged.map((data, i) => (
            <Card key={i} additionalClasses="flex justify-center">
              <Job title={data.title} status={data.status} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsBoxNotTagged;
