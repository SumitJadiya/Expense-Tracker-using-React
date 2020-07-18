import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import { FaRupeeSign } from "react-icons/fa"

export const IncomeExpense = () => {

    const { transactions } = useContext(MainContext)

    const amounts = transactions.map(transaction => transaction.amount)
    const totalIncome = amounts.filter(amount => amount > 0).reduce(((prev, curr) => prev += curr), 0).toFixed(2);
    const totalExpense = amounts.filter(amount => amount < 0).reduce(((prev, curr) => prev -= curr), 0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus"><FaRupeeSign /> {totalIncome}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus"><FaRupeeSign /> {totalExpense}</p>
            </div>
        </div>
    )
}
