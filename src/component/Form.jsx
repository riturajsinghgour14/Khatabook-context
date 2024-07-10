import React, { useEffect, useState,useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const Form = () => {
  const {edit,AddTransaction ,updateTranction } = useContext(TransactionContext)
  // state for inputs
  const [text, setText] = useState('')
  const [amount, setAmount] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
   
  if (edit.isEdit){
    updateTranction({
        id:edit.tranctions.id,
        text:text,
        amount: parseInt (amount)
    })
  }else{
    AddTransaction(text, amount)
  }
    setText('')
    setAmount(0)
  }

  useEffect(() => {
    setText(edit.tranctions.text)
    setAmount(edit.tranctions.amount)
  } , [edit])

  return (
    <div className={ "card p-3 my-3 "}>
      <h3 className={ "text-center text-secondary"}>
        Enter Your Transaction
      </h3>
      <form className='my-3' onSubmit={handleSubmit}>
        <input type="text" 
          placeholder="Enter Text Here" 
          className="form-control my-2"
          required
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <input type="number" 
          placeholder="Enter Amount" 
          className="form-control my-2"
          required
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />

        <button type="submit" className='btn btn-success w-100 mt-1'> 
          Save Transaction
        </button>
      </form>
    </div>
  )
}

export default Form;