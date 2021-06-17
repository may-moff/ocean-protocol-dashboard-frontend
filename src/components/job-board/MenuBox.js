import React from "react";
import JobboardLogo from "./JobboardLogo";
import MenuButton from "./MenuButton";
import AmountFilter from "./AmountFilter";

const MenuBox = (props) => {
  const { name } = props;

  return (
    <div>
      <MenuButton />
      <JobboardLogo name={name} />
      <AmountFilter amount="9" />
    </div>
  );
};

export default MenuBox;
