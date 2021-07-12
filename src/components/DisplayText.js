import log from '../Assets/algorithm.log';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ButtonPrimary from './ButtonPrimary';

const DisplayText = () => {
  const [content, setContent] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [displayUrl, setDisplayUrl] = useState(null);

  useEffect(() => console.log(content, displayUrl), [content, displayUrl]);

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

  return (
    <div>
      <form>
        <input type="file" onChange={handleSelect} />
        <ButtonPrimary function={handleSubmit} name="Submit" />
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
};

export default DisplayText;
