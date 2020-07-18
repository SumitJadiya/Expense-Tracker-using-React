import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(MainContext)

    var sign = (transaction.amount < 0) ? '-' : ''
    var type = (transaction.amount < 0) ? 'minus' : 'plus'

    return (
        <div>
            <li key={transaction.id} className={type}>
                {transaction.text} <span>{sign} Rs. {Math.abs(transaction.amount)}</span>
                <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
            </li>
        </div>
    )
}
