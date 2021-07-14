import React, { useEffect } from 'react';

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
    setContent([...content.parseKeys, { key: '', dataType: '', value: '' }]);
    setContent({
      ...content,
      parseKeys: [...content.parseKeys, { key: '', dataType: '', value: '' }],
    });
  };

  return (
    <div className="">
      {content &&
        content.parseKeys.map((x, i) => {
          return (
            <div key={i} className="p-2">
              <div className="flex border rounded">
                <input
                  className="border-4 p-2 m-2 w-1/5"
                  name="key"
                  placeholder="Key"
                  value={x.key || ''}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <input
                  className="border-4 p-2 m-2 w-1/5"
                  name="type"
                  placeholder="Type"
                  value={x.dataType || ''}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <input
                  className="border-4 p-2 m-2 w-1/5"
                  name="value"
                  placeholder="Value"
                  value={x.value || ''}
                  onChange={(e) => handleInputChange(e, i)}
                />
                <div className="flex justify-items-center mb-4 w-1/5">
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
          );
        })}
    </div>
  );
}

export default FormParse;
