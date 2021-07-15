import React, { useEffect } from "react";

function FormParse({ content, setContent }) {
  useEffect(() => {
    const displayContent = content.parseKeys.map((e) => ({
      ...e,
      value: content.result[e.key],
    }));
    setContent({ ...content, parseKeys: displayContent });
  }, []);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...content.parseKeys];
    list[index][name] = value;
    setContent({ ...content, parseKeys: list });
  };

  const handleRemoveClick = (index) => {
    const list = [...content.parseKeys];
    list.splice(index, 1);
    setContent({ ...content, parseKeys: list });
  };

  const handleAddClick = () => {
    setContent([...content.parseKeys, { key: "", dataType: "", value: "" }]);
    setContent({
      ...content,
      parseKeys: [...content.parseKeys, { key: "", dataType: "", value: "" }],
    });
  };

  return (
    <div className="max-h-155 overflow-y-scroll ">
      <div className="flex border rounded m-1 font-bold p-1">
        <div className="border-1 p-1 w-2/12">Key:</div>
        <div className="border-1 p-1 w-2/12">Type:</div>
        <div className="border-1 p-2 w-7/12">Value:</div>
      </div>
      {content &&
        content.parseKeys.map((x, i) => {
          return (
            <div key={i} className="m-1 text-base">
              <div className="hover:bg-bgreylighter">
                <div className="flex border rounded m-1">
                  <input
                    className="border-2 p-1 w-2/12"
                    name="key"
                    placeholder="Key"
                    value={x.key || ""}
                    onChange={(e) => handleInputChange(e, i)}
                  />

                  <input
                    className="border-2 p-1 w-2/12"
                    name="type"
                    placeholder="Type"
                    value={x.dataType || ""}
                    onChange={(e) => handleInputChange(e, i)}
                  />

                  <input
                    className="border-2 p-2 w-7/12"
                    name="value"
                    placeholder="Value"
                    readOnly
                    value={x.value || ""}
                  />
                  <div className="flex object-center w-20">
                    <div>
                      {content.parseKeys.length !== 1 && (
                        <button
                          type="checkbox"
                          className="bg-bgreylight text-white py-2 px-2 font-semibold rounded transform hover:-translate-y-0.5 duration-300"
                          onClick={() => handleRemoveClick(i)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {content.parseKeys.length - 1 === i && (
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
