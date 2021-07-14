import React from "react";

const LogViewer = ({ file }) => {
  return (
    <iframe src={file} title="file preview" className="w-full" height="600px" />
  );
};

export default LogViewer;
