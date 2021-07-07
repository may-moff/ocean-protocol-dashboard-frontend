import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    New: 0,
    Tagged: 1,
  },
  {
    name: "February",
    New: 0,
    Tagged: 2,
  },
  {
    name: "March",
    New: 0,
    Tagged: 6,
  },
  {
    name: "April",
    New: 0,
    Tagged: 5,
  },
  {
    name: "May",
    New: 1,
    Tagged: 3,
  },
  {
    name: "June",
    New: 2,
    Tagged: 4,
  },
  {
    name: "July",
    New: 1,
    Tagged: 0,
  },
  {
    name: "August",
    New: 0,
    Tagged: 0,
  },
  {
    name: "September",
    New: 0,
    Tagged: 0,
  },
  {
    name: "October",
    New: 0,
    Tagged: 0,
  },
  {
    name: "November",
    New: 0,
    Tagged: 0,
  },
  {
    name: "December",
    New: 0,
    Tagged: 0,
  },
];

const ChartTotalJobs = () => {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={1000}
      height={200}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="Tagged" stackId="a" fill="#41474e" />
      <Bar dataKey="New" stackId="a" fill="#7b1173" />
    </BarChart>
    // </ResponsiveContainer>
  );
};

export default ChartTotalJobs;
