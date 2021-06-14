import React from 'react'
import ButtonDefault from "./ButtonDefault"
import ButtonPrimary from "./ButtonPrimary"
import ButtonGhost from "./ButtonGhost"

function Dashboard() {
    return (
        <div class="flex justify-around">
            <ButtonDefault />
            <ButtonPrimary />
            <ButtonGhost />
        </div>
    )
}

export default Dashboard

