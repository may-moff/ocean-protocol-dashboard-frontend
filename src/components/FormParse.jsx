import React, { useState, useContext } from 'react'
import UserContext from '../contexts/UserContext'
import axios from 'axios'
import {
  ADD_ROW,
  REMOVE_ROW,
  UNDO_REMOVE,
  SET_STATE
} from '../reducers-actions/formReducerActions'
function FormParse({ currentJob, dispatchCurrentJob }) {
  const { userId } = useContext(UserContext)
  const [newUserKey, setNewUserKey] = useState('')

  const normalizeValue = (value) => {
    const output = value.replace(/_/g, ' ').toLocaleLowerCase()
    return output.charAt(0).toLocaleUpperCase() + output.slice(1)
  }

  const handleSubmit = async (state) => {
    const secondParse = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/users/${userId}/algo/${currentJob.algorithmId}`,
      state
    )
    return secondParse
  }

  return (
    <div className="max-h-155 overflow-y-auto ">
      <div className="flex justify-around m-2">
        <input
          className="border-2 p-1 w-7/12"
          name="key"
          placeholder="Key"
          value={newUserKey}
          onChange={(e) => setNewUserKey(e.target.value)}
        />
        <button
          className=" bg-bpink text-white py-2 px-6 font-semibold rounded transform hover:-translate-y-0.5 duration-300"
          onClick={async () => {
            dispatchCurrentJob({ type: ADD_ROW, payload: newUserKey })
            dispatchCurrentJob({
              type: SET_STATE,
              payload: await handleSubmit()
            })
          }}
        >
          Add Row
        </button>
      </div>
      <div className="flex justify-around m-2">
        {/* {currentJob.parseKeys.length > 0 && (
          <button
            className=" bg-bpink text-white py-2 px-6 font-semibold rounded transform hover:-translate-y-0.5 duration-300"
            onClick={() => dispatchCurrentJob({ type: ADD_ROW })}
          >
            Add Row
          </button>
        )} */}
        {currentJob.removedItemsHistory.length > 0 && (
          <button
            className="bg-bpink text-white py-2 px-6 font-semibold rounded transform hover:-translate-y-0.5 duration-300"
            onClick={() => dispatchCurrentJob({ type: UNDO_REMOVE })}
          >
            Undo Remove
          </button>
        )}
      </div>
      {currentJob.parseKeys.length > 0 && (
        <div className="flex border rounded m-1 font-bold p-1">
          <div className="border-1 p-1 w-2/12">Key:</div>
          <div className="border-1 p-1 w-2/12">Type:</div>
          <div className="border-1 p-2 w-7/12">Value:</div>
        </div>
      )}
      {currentJob.parseKeys.map(
        (x, i) =>
          x.visualize && (
            <div key={i} className="m-1 text-base">
              <div className="hover:bg-bgreylighter">
                <div className="flex border rounded m-1">
                  <input
                    className="border-2 p-1 w-2/12"
                    name="key"
                    placeholder="Key"
                    readOnly
                    value={normalizeValue(x.key)}
                    // onChange={(e) =>
                    //   dispatchCurrentJob({
                    //     action: HANDLE_INPUT_CHANGE,
                    //     element: e,
                    //     index: i
                    //   })
                    // }
                  />

                  <input
                    className="border-2 p-1 w-2/12"
                    name="type"
                    placeholder="Type"
                    readOnly
                    value={x.dataType}
                    // onChange={(e) =>
                    //   dispatchCurrentJob({
                    //     action: HANDLE_INPUT_CHANGE,
                    //     element: e,
                    //     index: i
                    //   })
                    // }
                  />
                  <input
                    className="border-2 p-2 w-7/12"
                    name="value"
                    placeholder="Value"
                    readOnly
                    value={x.value}
                  />
                  <div className="flex justify-center justify-items-center w-20">
                    <div>
                      {currentJob.parseKeys.length > 1 && (
                        <button
                          type="checkbox"
                          className="bg-bgreylight text-white py-2 px-2 font-semibold rounded transform hover:-translate-y-0.5 duration-300"
                          onClick={() =>
                            dispatchCurrentJob({
                              type: REMOVE_ROW,
                              index: i
                            })
                          }
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  )
}

export default FormParse
