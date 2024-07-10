import React, { useContext } from 'react'
import ListItem from './ListItem'
import TransactionContext from '../context/TransactionContext';

const ListGroup = () => {
  const{ tranctions}=useContext(TransactionContext);

  return (
            
    <div className="card p-3">
       <h3 className='text-secoundary'>All Tranction:</h3>
        <ul className='my-3 list-group'>
         {
            tranctions.map(tranctions=>{
                return <ListItem key={tranctions.id} 
                 tranctions={tranctions}/>
            })
         }
         
        </ul>
         </div>
  )
}

export default ListGroup
