import React from 'react'

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <>
      <div className="flex justify-center w-2/4 mb-4">
        <input
          className="border-2 p-1 w-7/12 ml-1 md:ml-4"
          key="random1"
          value={keyword}
          placeholder="Search..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button className="text-xs md:text-base bg-bpink text-white py-2 px-4 md:px-6 font-semibold rounded transform hover:-translate-y-0.5 duration-300">
          Search
        </button>
      </div>
    </>
  )
}

export default SearchBar
