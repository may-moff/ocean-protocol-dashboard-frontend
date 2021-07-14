import React from 'react';

function FormParse({ content, setContent }) {
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
    // setContent([...content.parseKeys, { key: '', dataType: '', value: '' }]);
    setContent({
      ...content,
      parseKeys: [
        ...content.parseKeys,
        { key: '', dataType: '', value: '', visualize: true },
      ],
    });
  };

  return (
    <div className="max-h-screen">
      {content &&
        content.parseKeys.map(
          (x, i) =>
            x.visualize && (
              <div key={i} className="m-1">
                <div className="hover:bg-bgreylighter">
                  <div className="flex border rounded m-1">
                    <div className="flex place-items-center font-bold p-1">
                      Key:
                    </div>
                    <input
                      className="border-1 p-1 w-1/12"
                      name="key"
                      placeholder="Key"
                      value={x.key || ''}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                    <div className="flex place-items-center font-bold p-1">
                      Type:
                    </div>
                    <input
                      className="border-1 p-1 w-1/12"
                      name="type"
                      placeholder="Type"
                      value={x.dataType || ''}
                      onChange={(e) => handleInputChange(e, i)}
                    />
                    <div className="flex place-items-center font-bold p-1">
                      Value:
                    </div>
                    <input
                      className="border-1 p-2 w-3/6"
                      name="value"
                      placeholder="Value"
                      readOnly
                      value={x.value || ''}
                    />
                    <div className="flex object-center w-1/12 ">
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
                  </div>
                </div>
              </div>
            )
        )}
    </div>
  );
}

export default FormParse;
