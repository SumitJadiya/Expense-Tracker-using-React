import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import { Transaction } from './Transaction'

export const TransactionList = () => {
    const { transactions } = useContext(MainContext)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    )
}
