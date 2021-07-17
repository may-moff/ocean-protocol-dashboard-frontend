import React from 'react'

const NewjobForm = ({
  getRootProps,
  getInputProps,
  open,
  algoName,
  setAlgoName,
  dataName,
  setDataName
}) => {
  return (
    <form>
      <div className="flex flex-col w-full">
        Job name:
        <label>
          <input className="border-4 m-2 w-7/12" type="text" name="Job name" />
        </label>
        Data name:
        <label>
          <input
            className="border-4 m-2 w-7/12"
            type="text"
            name="dataName"
            value={dataName}
            onChange={(e) => setDataName(e.target.value)}
          />
        </label>
        Algorithm name:
        <label>
          <input
            className="border-4 m-2 w-7/12"
            type="text"
            name="Algorithm name"
            value={algoName}
            onChange={(e) => setAlgoName(e.target.value)}
          />
        </label>
      </div>
      <div {...getRootProps({ className: 'p-6 m-6 border-2' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop log file here or</p>
        <button
          type="button"
          className="bg-bgreylight m-6 text-white py-2 px-6 font-semibold rounded transform hover:-translate-y-0.5 duration-300 "
          onClick={open}
        >
          Open File Dialog
        </button>
      </div>
    </form>
  )
}

export default NewjobForm
