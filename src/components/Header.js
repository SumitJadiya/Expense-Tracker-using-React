import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi";

export const Header = () => {
    return (
        <>
            <div className="appName">
                <GiTakeMyMoney /> <span>Money Tracker</span>
            </div>
        </>
    )
}
