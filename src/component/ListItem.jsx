import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext';

const ListItem = ({tranctions}) => {
  const{ deleteTransaction,EditTransction}=useContext(TransactionContext);
  return (
    <li className={tranctions.amount > 0 
   ? 'list-group-item bg-success text-light p-3 '
    : 'list-group-item bg-danger text-light p-3 '}>
          <h1>{tranctions.text}:{tranctions.amount}</h1>
          <button className='float-end btn btn-sm btn-light'
          onClick={()=>deleteTransaction(tranctions.id)}>Delte</button>
          <button className=' mx-2 float-end btn btn-sm btn-warning'
            onClick={()=>EditTransction(tranctions)}
          >Edit</button>
      </li>

  );
};

export default ListItem;
