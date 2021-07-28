import React, { useState, useCallback, useContext } from 'react'
import NewjobForm from './NewjobForm'
import { useDropzone } from 'react-dropzone'
import ButtonPrimary from '../atoms/ButtonPrimary'
import LogViewer from './LogViewer'
import { SET_STATE } from '../../reducers-actions/formReducerActions'
import UserContext from '../../contexts/UserContext'
import axios from '../../axiosConfig'

function FileUpload({ dispatchCurrentJob, logReady, setLogReady }) {
  const { userId } = useContext(UserContext)
  const [selectedFile, setSelectedFile] = useState(null)
  const [displayUrl, setDisplayUrl] = useState(null)
  const [jobName, setJobName] = useState('')
  const [algoName, setAlgoName] = useState('')
  const [dataName, setDataName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const inputValidation = [jobName, dataName, algoName]
    if (inputValidation.every((e) => e)) {
      const newAlgo = await axios.post(`/users/${userId}/algo`, {
        algoName
      })

      const fileExtension = selectedFile.name.split('.').pop()
      let formdata = new FormData()
      formdata.append('logBlob', selectedFile, fileExtension)
      formdata.append('algorithmId', newAlgo.data._id)
      formdata.append('dataName', dataName)
      formdata.append('algoName', algoName)
      formdata.append('jobName', jobName)
      const httpRequestOptions = {
        url: `/users/${userId}/jobs`,
        method: 'POST',
        data: formdata,
        headers: {
          enctype: 'multipart/form-data'
        }
      }

      await axios(httpRequestOptions)
        .then((response) => {
          dispatchCurrentJob({
            type: SET_STATE,
            payload: response.data
          })
          setLogReady(true)
        })
        .catch((error) => console.error(error))
    } else {
      window.alert(
        'Please, make sure to fill all the fields before proceeding.'
      )
    }
  }

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0])

    setDisplayUrl({
      file: URL.createObjectURL(acceptedFiles[0])
    })
  }, [])

  const { getRootProps, getInputProps, open /* acceptedFiles */ } = useDropzone(
    {
      // Disable click and keydown behavior
      noClick: true,
      noKeyboard: true,
      onDrop
    }
  )

  // const files = acceptedFiles.map((file) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ))

  return (
    <div className="w-10/12 min-w-min h-155 ">
      {!logReady && (
        <div className="text-base border-md shadow-xl text-center border rounded-sm p-2 m-2 min-w-min bg-white">
          <NewjobForm
            getRootProps={getRootProps}
            getInputProps={getInputProps}
            open={open}
            jobName={jobName}
            setJobName={setJobName}
            algoName={algoName}
            setAlgoName={setAlgoName}
            dataName={dataName}
            setDataName={setDataName}
          />
        </div>
      )}

      {displayUrl && !logReady && (
        <div className="m-2">
          <ButtonPrimary function={handleSubmit} name="Submit" />
        </div>
      )}
      {displayUrl && <LogViewer file={displayUrl.file} />}
    </div>
  )
}

export default FileUpload
