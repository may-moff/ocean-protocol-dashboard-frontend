import React from 'react';
import JobBoardLogo from './JobBoardLogo';
import MenuButton from './MenuButton';
import AmountFilter from './AmountFilter';

const MenuBox = (props) => {
  const { name } = props;

  return (
    <div>
      {/* <MenuButton /> */}
      <JobBoardLogo name={name} />
      <AmountFilter amount="9" />
    </div>
  );
};

export default MenuBox;
