import {createContext, useState} from 'react'

const TransactionContext=createContext()

export const TransactionProvider =({children}) =>{

    const [tranctions,setTranctions]=useState([])

     const [edit,setEdit]=useState({
        tranctions:{},
        isEdit:false,
       })
    

     const deleteTransaction=(id)=>{
        setTranctions(
         tranctions.filter(tranction=>tranction.id !== id)
        )
      }

      
   const AddTransaction=(text,amount)=>{
    const newTransaction={
     id:crypto.randomUUID(),
     text: text,
     amount:parseInt (amount),
    }
    setTranctions([newTransaction,...tranctions]);
  };

  const EditTransction=(oldTranctions)=>{
  setEdit({
   tranctions:oldTranctions,
   isEdit:true,
  })
  }

  const updateTranction=(updatedTrancation)=>{
   setTranctions(tranctions.map(item => item.id === updatedTrancation.id ? updatedTrancation :item ))
   setEdit({
     tranctions:{},
     isEdit:false,
   })
  }
     
   return (
    (<TransactionContext.Provider value={
        {tranctions  ,
         edit:edit , 
         deleteTransaction:deleteTransaction,
         AddTransaction:AddTransaction,
         EditTransction:EditTransction,
         updateTranction:updateTranction,
         }}>
        {children}
    </TransactionContext.Provider>)
   )

   
}

export default TransactionContext
