import React from "react";

const LogViewer = ({ file }) => {
  return (
    <iframe src={file} title="file preview" className="w-full max-h-screen" />
  );
};

export default LogViewer;
