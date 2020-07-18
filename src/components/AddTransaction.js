import React, { useState, useContext } from 'react'
import { MainContext } from '../context/MainContext'
import { v4 } from "uuid"

export const AddTransaction = () => {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    const { addTransaction } = useContext(MainContext)

    const submitHandle = e => {
        e.preventDefault();
        const newTransaction = {
            id: v4(),
            text,
            amount: +amount
        }
        console.log(newTransaction)
        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Add new Transaction</h3>
            <form onSubmit={submitHandle}>
                <div>

                    <input
                        type="text"
                        name="description"
                        placeholder="Please enter the description"
                        className=""
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </div>
                <div>

                    <input
                        type="text"

                        placeholder="Please enter the amount"
                        className=""
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    )
}
