import React, { useState, useEffect, useContext } from 'react'
import FileUpload from '../new-job/FileUpload'
import FormParse from '../FormParse'
import ButtonPrimary from '../atoms/ButtonPrimary'
import preview from '../../assets/Preview-icon.png'
import axios from '../../axiosConfig'
import { SET_STATE, RESET } from '../../reducers-actions/formReducerActions'
import UserContext from '../../contexts/UserContext'
import { useHistory } from 'react-router-dom'
import waves from './../../assets/waves.svg'
import LogViewer from './LogViewer'

const NewJob = ({
  currentJob,
  dispatchCurrentJob,
  displayUrl,
  setDisplayUrl
}) => {
  const { userId } = useContext(UserContext)
  const [logReady, setLogReady] = useState(false)
  const [showParseButton, setShowParseButton] = useState(false)
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
      setShowParseButton(false)
      dispatchCurrentJob({ type: RESET })
    }
  }, [dispatchCurrentJob])

  return (
    <div
      className="bg-fixed"
      style={{
        backgroundImage: `url(${waves})`,
        zIndex: '-10',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '110%',
        backgroundPosition: 'center'
      }}
    >
      <div className="text-center p-6">
        <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-6 m-6 bg-white">
          Create New Job
          {showParseButton && (
            <div className="m-2">
              <ButtonPrimary function={handleSubmit} name="Save" />
            </div>
          )}
        </div>
        <div className="flex">
          <div className="flex justify-center justify-items-center w-4/6 ">
            {currentJob.parseKeys.length === 0 && (
              <FileUpload
                dispatchCurrentJob={dispatchCurrentJob}
                logReady={logReady}
                setLogReady={setLogReady}
                setDisplayUrl={setDisplayUrl}
                setShowParseButton={setShowParseButton}
              />
            )}
            {currentJob.parseKeys.length > 0 && (
              <div className="ml-12">
                <FormParse
                  logReady={logReady}
                  currentJob={currentJob}
                  dispatchCurrentJob={dispatchCurrentJob}
                />
              </div>
            )}
          </div>
          <div className="flex justify-center justify-items-center w-4/6 m-2">
            {logReady ? (
              <div className="w-4/6 border border-4 shadow-xl">
                <LogViewer file={displayUrl.file} />
              </div>
            ) : (
              <div className="flex justify-center place-items-center w-4/6 h-142 border border-4 shadow-xl bg-white">
                <img src={preview} alt="Log-preview" width="50" height="100" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewJob
