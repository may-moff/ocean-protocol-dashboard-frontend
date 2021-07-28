import React from 'react'

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="flex justify-center  mb-4">
      <input
        className="border-2 p-1 h-12 w-4/12 ml-1 md:ml-4"
        key="random1"
        value={search}
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
