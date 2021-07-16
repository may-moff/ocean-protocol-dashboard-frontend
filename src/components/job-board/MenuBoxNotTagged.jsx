import React from 'react'
import AmountFilter from './AmountFilter'

const MenuBoxNotTagged = () => {
  return (
    <div>
      <div className="text-xl text-center border rounded-sm font-bold p-6 ">
        Jobs to be tagged
      </div>
      <AmountFilter amount="3" />
    </div>
  )
}

export default MenuBoxNotTagged
