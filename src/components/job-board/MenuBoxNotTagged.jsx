import React from 'react'
import MenuButton from './MenuButton'
import AmountFilter from './AmountFilter'

const MenuBoxNotTagged = (props) => {
  const { name } = props

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
