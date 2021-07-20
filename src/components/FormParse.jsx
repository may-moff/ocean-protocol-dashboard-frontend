import React from 'react'
import {
  ADD_ROW,
  REMOVE_ROW,
  UNDO_REMOVE,
  HANDLE_INPUT_CHANGE
} from '../reducers-actions/formReducerActions'
function FormParse({
  currentJob,
  dispatchCurrentJob,
  removedItemsHystory,
  setRemovedItemsHistory
}) {
  /* const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...content.parseKeys]
    list[index][name] = value
    setContent({ ...content, parseKeys: list })
  }

  const handleRemoveClick = (index) => {
    const list = [...content.parseKeys]
    setRemovedItemsHistory([...removedItemsHystory, list[index].key])
    list[index].visualize = false
    setContent({ ...content, parseKeys: list })
  }

  const handleAddClick = () => {
    setContent({
      ...content,
      parseKeys: [
        ...content.parseKeys,
        { key: '', dataType: '', value: '', visualize: true }
      ]
    })
  }

  const handleUndoClick = () => {
    const index = content.parseKeys.findIndex(
      (e) => e.key === removedItemsHystory[removedItemsHystory.length - 1]
    )
    const list = [...content.parseKeys]
    list[index].visualize = true
    const updatedRemovedItemsHistory = [...removedItemsHystory]
    updatedRemovedItemsHistory.pop()
    setRemovedItemsHistory(updatedRemovedItemsHistory)
    setContent({ ...content, parseKeys: list })
  } */

  const normalizeValue = (value) => {
    const output = value.replace(/_/g, ' ').toLocaleLowerCase()
    return output.charAt(0).toLocaleUpperCase() + output.slice(1)
  }

  return (
    <div className="max-h-155 overflow-y-auto ">
      <div className="flex justify-around m-2">
        {currentJob.parseKeys && (
          <button
            className=" bg-bpink text-white py-2 px-6 font-semibold rounded transform hover:-translate-y-0.5 duration-300"
            onClick={() => dispatchCurrentJob({ type: ADD_ROW })}
          >
            Add Row
          </button>
        )}
        {currentJob.removedItemsHystory && (
          <button
            className="bg-bpink text-white py-2 px-6 font-semibold rounded transform hover:-translate-y-0.5 duration-300"
            onClick={() => dispatchCurrentJob({ type: UNDO_REMOVE })}
          >
            Undo Remove
          </button>
        )}
      </div>

      {currentJob.parseKeys && (
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
                    value={normalizeValue(x.key) || ''}
                    onChange={(e) =>
                      dispatchCurrentJob({
                        action: HANDLE_INPUT_CHANGE,
                        element: e,
                        index: i
                      })
                    }
                  />

                  <input
                    className="border-2 p-1 w-2/12"
                    name="type"
                    placeholder="Type"
                    value={x.dataType || ''}
                    onChange={(e) =>
                      dispatchCurrentJob({
                        action: HANDLE_INPUT_CHANGE,
                        element: e,
                        index: i
                      })
                    }
                  />
                  <input
                    className="border-2 p-2 w-7/12"
                    name="value"
                    placeholder="Value"
                    readOnly
                    value={x.value || ''}
                  />
                  <div className="flex justify-center justify-items-center w-20">
                    <div>
                      {currentJob.parseKeys.length !== 1 && (
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
