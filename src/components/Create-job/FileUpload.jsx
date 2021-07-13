import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import ButtonPrimary from '../ButtonPrimary';
import axios from 'axios';

function FileUpload({ content, setContent }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayUrl, setDisplayUrl] = useState(null);

  function getFormattedTime() {
    const today = new Date();
    const y = today.getFullYear();
    // JavaScript months are 0-based.
    const m = today.getMonth() + 1;
    const d = today.getDate();
    const h = today.getHours();
    const mi = today.getMinutes();
    const s = today.getSeconds();
    return y + '-' + m + '-' + d + '-' + h + '-' + mi + '-' + s;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedFile);
    const fileName = `${getFormattedTime()}`;
    const fileExtension = selectedFile.name.split('.').pop();
    let formdata = new FormData();
    formdata.append('logBlob', selectedFile, `${fileName}.${fileExtension}`);

    const httpRequestOptions = {
      url: `http://localhost:8000/api/test/upload`,
      method: 'POST',
      data: formdata,
      headers: new Headers({
        enctype: 'multipart/form-data',
      }),
    };

    await axios(httpRequestOptions)
      .then((response) => {
        setContent(response.data);
      })
      .catch((error) => console.error(error));
  };

  const handleSelect = (e) => {
    setSelectedFile(e.target.files[0]);
    setDisplayUrl({
      file: URL.createObjectURL(e.target.files[0]),
    });
  };

  const onDrop = useCallback((acceptedFiles) => {
    setDisplayUrl({
      file: URL.createObjectURL(acceptedFiles[0]),
    });
  }, []);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    onDrop,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="text-xl border-md shadow-xl text-center border rounded-sm p-6 m-6 w-2/5">
      <form>
        <div {...getRootProps({ className: 'p-6 m-6' })}>
          <input {...getInputProps()} onChange={handleSelect} />
          <p>Drag 'n' drop files here or</p>
          <button
            type="button"
            className="bg-bgreylight m-6 text-white py-2 px-6 font-semibold rounded transform hover:-translate-y-0.5 duration-300 "
            onClick={open}
          >
            Open File Dialog
          </button>
        </div>
        {displayUrl && <ButtonPrimary function={handleSubmit} name="Submit" />}
      </form>
      {displayUrl && (
        <iframe
          src={displayUrl.file}
          title="file preview"
          height="600px"
          width="500px"
        />
      )}
    </div>
  );
}

export default FileUpload;
