import React from "react";
import { useDropzone } from "react-dropzone";

function FileUpload(props) {
  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="text-xl border-md shadow-xl text-center border rounded-sm p-6 m-6 w-2/5">
      <div {...getRootProps({ className: "p-6 m-6" })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop files here or</p>
        <button
          type="button"
          className="bg-bgreylight m-6 text-white py-2 px-6 font-semibold rounded transform hover:-translate-y-0.5 duration-300 "
          onClick={open}
        >
          Open File Dialog
        </button>
      </div>
      <aside>
        {/* <h4>Files</h4> */}
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

export default FileUpload;
