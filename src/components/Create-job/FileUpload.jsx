import React, { useState, useCallback } from 'react';
import NewjobForm from './NewjobForm';
import { useDropzone } from 'react-dropzone';
import ButtonPrimary from '../ButtonPrimary';
import axios from 'axios';
import LogViewer from './LogViewer';

function FileUpload({ setContent, pubblicAddress, logReady, setLogReady }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayUrl, setDisplayUrl] = useState(null);
  const [algoName, setAlgoName] = useState('');
  const [dataName, setDataName] = useState('');

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

    const newAlgo = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/users/${pubblicAddress}/algo`,
      {
        name: algoName,
      }
    );

    const fileName = `${getFormattedTime()}`;
    const fileExtension = selectedFile.name.split('.').pop();
    let formdata = new FormData();
    formdata.append('logBlob', selectedFile, `${fileName}.${fileExtension}`);
    formdata.append('algorithmId', newAlgo.data._id);
    formdata.append('dataName', dataName);
    const httpRequestOptions = {
      url: `${process.env.REACT_APP_BACKEND_URL}/users/${newAlgo.data.userId}/jobs`,
      method: 'POST',
      data: formdata,
      headers: new Headers({
        enctype: 'multipart/form-data',
      }),
    };

    await axios(httpRequestOptions)
      .then((response) => {
        const displayContent = response.data.parseKeys.map((e) => ({
          ...e,
          value: response.data.result[e.key],
        }));
        const defaultKeys = response.data.parseKeys.map((e) => e.key);
        setContent({
          ...response.data,
          parseKeys: displayContent,
          defaultKeys,
        });
        setLogReady(true);
      })
      .catch((error) => console.error(error));
  };

  // const handleSelect = (e) => {
  //   setSelectedFile(e.target.files[0]);
  //   setDisplayUrl({
  //     file: URL.createObjectURL(e.target.files[0]),
  //   });
  // };

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);

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
    <div className="w-full">
      <div className="text-xl border-md shadow-xl text-center border rounded-sm p-2 m-2 w-full min-w-min">
        {!logReady && (
          <NewjobForm
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            open={open}
            algoName={algoName}
            setAlgoName={setAlgoName}
            dataName={dataName}
            setDataName={setDataName}
          />
        )}
      </div>
      {displayUrl && <LogViewer file={displayUrl.file} />}
      {displayUrl && !logReady && (
        <div className="m-6">
          {' '}
          <ButtonPrimary function={handleSubmit} name="Submit" />{' '}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
