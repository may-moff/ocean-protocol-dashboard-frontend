import React, { useState } from "react";

function FormParse() {
  const [inputList, setInputList] = useState([
    { DispLabel: "", RefLogLabel: "", Type: "", Value: "" },
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { DispLabel: "", RefLogLabel: "", Type: "", Value: "" },
    ]);
  };

  return (
    <div className="">
      {inputList.map((x, i) => {
        return (
          <div className="flex border rounded">
            <input
              className="border-4 p-2 m-4"
              name="DispLabel"
              placeholder="DispLabel"
              value={x.DispLabel}
              onChange={(e) => handleInputChange(e, i)}
            />
            <input
              className="border-4 p-2 m-4"
              name="RefLogLabel"
              placeholder="RefLogLabel"
              value={x.RefLogLabel}
              onChange={(e) => handleInputChange(e, i)}
            />
            <input
              className="border-4 p-2 m-4"
              name="Type"
              placeholder="Type"
              value={x.Type}
              onChange={(e) => handleInputChange(e, i)}
            />
            <input
              className="border-4 p-2 m-4"
              name="Value"
              placeholder="Value"
              value={x.Value}
              onChange={(e) => handleInputChange(e, i)}
            />
            <div className="flex justify-around mb-4 ">
              {inputList.length !== 1 && (
                <button
                  className="bg-bgreylight text-white py-2 px-6 font-semibold rounded transform hover:-translate-y-0.5 duration-300"
                  onClick={() => handleRemoveClick(i)}
                >
                  Remove
                </button>
              )}
              {inputList.length - 1 === i && (
                <button
                  className="bg-bpink text-white py-2 px-6 font-semibold rounded transform hover:-translate-y-0.5 duration-300"
                  onClick={handleAddClick}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FormParse;
