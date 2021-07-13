import React, { useEffect } from "react";

function FormParse({ content, setContent }) {
  useEffect(() => {
    const displayContent = content.parseKeys.map((e) => ({
      ...e,
      value: content.results[e.key],
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
    <div className="">
      {content &&
        content.parseKeys.map((x, i) => {
          return (
            <div className="p-2">
              <div className="hover:bg-bgreylighter">
                <div className="flex border rounded">
                  <div className="flex place-items-center font-bold p-2">
                    Key:
                  </div>
                  <input
                    className="border-4 p-2 m-2 w-1/6"
                    name="key"
                    placeholder="Key"
                    value={x.key}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  <div className="flex place-items-center font-bold p-2">
                    Data type:
                  </div>
                  <input
                    className="border-4 p-2 m-2 w-1/6"
                    name="type"
                    placeholder="Type"
                    value={x.dataType}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  <div className="flex place-items-center font-bold p-2">
                    Value:
                  </div>
                  <input
                    className="border-4 p-2 m-2 w-3/6"
                    name="value"
                    placeholder="Value"
                    value={x.value}
                    onChange={(e) => handleInputChange(e, i)}
                  />
                  <div className="flex place-items-center object-center w-auto ">
                    <div>
                      {content.parseKeys.length !== 1 && (
                        <button
                          type="checkbox"
                          className="bg-bgreylight text-white py-2 px-2 m-2 font-semibold rounded transform hover:-translate-y-0.5 duration-300"
                          onClick={() => handleRemoveClick(i)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div>
                      {content.parseKeys.length - 1 === i && (
                        <button
                          className="bg-bpink text-white py-2 px-6 m-2 font-semibold rounded transform hover:-translate-y-0.5 duration-300"
                          onClick={handleAddClick}
                        >
                          Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default FormParse;
