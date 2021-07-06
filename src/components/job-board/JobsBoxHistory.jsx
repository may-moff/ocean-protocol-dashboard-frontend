import React from "react";
import Job from "./Job";
import Card from "../Card";

const fakeDataHistory = [
  { title: "Job Number 4", status: "in progres" },
  { title: "Job Number 5", status: "in progres" },
  { title: "Job Number 6", status: "in progres" },
  { title: "Job Number 7", status: "in progres" },
  { title: "Job Number 8", status: "in progres" },
  { title: "Job Number 9", status: "in progres" },
  { title: "Job Number 10", status: "in progres" },
  { title: "Job Number 11", status: "in progres" },
  { title: "Job Number 12", status: "in progres" },
];

const JobsBoxHistory = () => {
  return (
    <div>
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-6 m-6 ">
        Jobs History
      </div>
      <div className="container mx-auto flex justify-around">
        <div className="grid grid-cols-3 gap-8">
          {fakeDataHistory.map((data, i) => (
            <Card key={i} additionalClasses="flex justify-center">
              <Job title={data.title} status={data.status} />
            </Card>
          ))}
          <div className="container mx-auto flex justify-around"></div>
        </div>
      </div>
    </div>
  );
};

export default JobsBoxHistory;
