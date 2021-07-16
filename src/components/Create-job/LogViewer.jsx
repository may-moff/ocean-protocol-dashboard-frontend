import React from 'react'

const LogViewer = ({ file }) => {
  return (
    <iframe
      src={file}
      title="file preview"
      className="w-full h-screen max-h-155"
    />
  )
}

export default LogViewer
