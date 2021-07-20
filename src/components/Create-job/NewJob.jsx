import React, { useState } from 'react'
import FileUpload from '../Create-job/FileUpload'
import FormParse from '../FormParse'
import ButtonPrimary from '../ButtonPrimary'
import axios from 'axios'

const NewJob = ({ content, setContent, publicAddress }) => {
  const [logReady, setLogReady] = useState(false)
  const [removedItemsHysotry, setRemovedItemsHistory] = useState([])

  const handleSubmit = async () => {
    setRemovedItemsHistory([])

    const secondParse = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/users/${content.userId}/algo/${content.algorithmId}`,
      content
    )
    setContent(secondParse.data)
  }

  return (
    <div className="text-center p-6">
      <div className="text-xl border-md shadow-xl text-center border rounded-sm font-bold p-1 m-1 ">
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
            setContent={setContent}
            publicAddress={publicAddress}
          />
        </div>
        <div className="flex justify-center justify-items-center w-3/5 ">
          <FormParse
            logReady={logReady}
            content={content}
            setContent={setContent}
            removedItemsHysotry={removedItemsHysotry}
            setRemovedItemsHistory={setRemovedItemsHistory}
          />
        </div>
      </div>
    </div>
  )
}

export default NewJob
