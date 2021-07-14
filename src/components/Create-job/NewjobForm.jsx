import React from "react";

const NewjobForm = ({ getRootProps, handleSelect, getInputProps, open }) => {
  return (
    <form>
      <div className="flex flex-col table-fixed w-full">
        Job name:
        <label>
          <input className="border-4 m-4 w-9/12" type="text" name="Job name" />
        </label>
        Description:
        <label>
          <textarea
            className="border-4 m-4 w-9/12 h-1/5"
            type="text"
            name="Description"
          />
        </label>
        Algorithm name:
        <label>
          <input
            className="border-4 m-4 w-9/12"
            type="text"
            name="Algorithm name"
          />
        </label>
      </div>
      <div {...getRootProps({ className: "p-6 m-6 border-2" })}>
        <input {...getInputProps()} onChange={handleSelect} />
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
  );
};

export default NewjobForm;
