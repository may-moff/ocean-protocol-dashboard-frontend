import React, { useState, useEffect, useContext } from 'react'
import FileUpload from '../new-job/FileUpload'
import FormParse from '../FormParse'
import ButtonPrimary from '../atoms/ButtonPrimary'
import axios from '../../axiosConfig'
import { SET_STATE, RESET } from '../../reducers-actions/formReducerActions'
import UserContext from '../../contexts/UserContext'
import { useHistory } from 'react-router-dom'
import LogViewer from './LogViewer'

const NewJob = ({
  currentJob,
  dispatchCurrentJob,
  displayUrl,
  setDisplayUrl
}) => {
  const { userId } = useContext(UserContext)
  const [logReady, setLogReady] = useState(false)
  let history = useHistory()

  const handleSubmit = async () => {
    const secondParse = await axios.put(
      `/users/${userId}/algo/${currentJob.algorithmId}`,
      currentJob
    )
    dispatchCurrentJob({
      type: SET_STATE,
      payload: { ...secondParse.data, removedItemsHistory: [] }
    })
    history.push(`/jobs/${currentJob.jobId}`)
  }

  useEffect(() => {
    return () => {
      setLogReady(false)
      dispatchCurrentJob({ type: RESET })
    }
  }, [dispatchCurrentJob])

  return (
    <div className="text-center p-6">
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-6 m-6 ">
        Create New Job
        {logReady && (
          <div className="m-2">
            <ButtonPrimary function={handleSubmit} name="Parse" />
          </div>
        )}
      </div>

      <div className="flex">
        <div className="flex justify-center justify-items-center w-2/5 mr-2">
          {currentJob.parseKeys.length === 0 && (
            <FileUpload
              logReady={logReady}
              setLogReady={setLogReady}
              dispatchCurrentJob={dispatchCurrentJob}
              displayUrl={displayUrl}
              setDisplayUrl={setDisplayUrl}
            />
          )}
          {currentJob.parseKeys.length > 0 && (
            <FormParse
              logReady={logReady}
              currentJob={currentJob}
              dispatchCurrentJob={dispatchCurrentJob}
            />
          )}
        </div>
        <div className="flex justify-center justify-items-center w-3/5 ">
          {logReady && <LogViewer file={displayUrl.file} />}
        </div>
      </div>
    </div>
  )
}

export default NewJob
