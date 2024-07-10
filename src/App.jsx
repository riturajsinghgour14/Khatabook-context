import React, { useState } from 'react'

import Dashboard from './component/Dashboard'
import Form from './component/Form'
import ListGroup from './component/ListGroup'
import { TransactionProvider } from './context/TransactionContext'
import Navbar from './component/Navebar'
const App = () => {

  const [tranctions,setTranctions]=useState([]);

  const [edit,setEdit]=useState({
    tranctions:{},
    isEdit:false,
  })
  return (
    <TransactionProvider>
      <Navbar
        />
      <div className= { "container px-3 py-5"}>
      <Dashboard />
      <Form   />
      <ListGroup  />
          </div> 
    </TransactionProvider>
  )
}

export default App
