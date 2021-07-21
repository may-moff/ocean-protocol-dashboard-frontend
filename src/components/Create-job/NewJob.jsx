import React, { useState } from 'react'
import FileUpload from '../Create-job/FileUpload'
import FormParse from '../FormParse'
import ButtonPrimary from '../ButtonPrimary'
import axios from 'axios'
import { SET_STATE } from '../../reducers-actions/formReducerActions'

const NewJob = ({ currentJob, dispatchCurrentJob }) => {
  const [logReady, setLogReady] = useState(false)

  const handleSubmit = async () => {
    const secondParse = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/users/${currentJob.userId}/algo/${currentJob.algorithmId}`,
      currentJob
    )
    dispatchCurrentJob({
      type: SET_STATE,
      payload: { ...secondParse.data, removedItemsHistory: [] }
    })
  }

  return (
    <div className="text-center p-6">
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-2 m-1 ">
        Create New Job
        {logReady && (
          <div className="m-2">
            <ButtonPrimary function={handleSubmit} name="Parse" />
          </div>
        )}
      </div>

      <div className="flex">
        <div className="flex justify-center justify-items-center w-2/5 mr-2">
          <FileUpload
            logReady={logReady}
            setLogReady={setLogReady}
            dispatchCurrentJob={dispatchCurrentJob}
          />
        </div>
        <div className="flex justify-center justify-items-center w-3/5 ">
          <FormParse
            logReady={logReady}
            currentJob={currentJob}
            dispatchCurrentJob={dispatchCurrentJob}
          />
        </div>
      </div>
    </div>
  )
}

export default NewJob
