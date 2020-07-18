import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import { FaRupeeSign } from "react-icons/fa"

export const Balance = () => {

    const { transactions } = useContext(MainContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const totalAmount = amounts.reduce((prev, curr) => (prev += curr), 0).toFixed(2);

    return (
        <div className="balances">
            <h4 className="title">Your balance</h4>
            <span className="balance"> <FaRupeeSign /> {totalAmount}</span>
        </div>
    )
}
