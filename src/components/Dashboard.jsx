import React from "react";
import Wave from "./wave/Wave";
import ButtonDefault from "./ButtonDefault"
import ButtonPrimary from "./ButtonPrimary"
import ButtonGhost from "./ButtonGhost"

function handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
  }

function Dashboard() {
    return (
      <>
        <div class="flex justify-around">
            <ButtonDefault name="DEFAULT" function={handleClick} />
            <ButtonPrimary name="PRIMARY" function={handleClick} />
            <ButtonGhost name="GHOST" function={handleClick} />
        </div>
        <Wave />
      </>
    )
}

export default Dashboard;
