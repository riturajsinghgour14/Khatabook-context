import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext';

const Dashboard = () => {
   const {tranctions} = useContext(TransactionContext)

    const Balance=tranctions.reduce((p,c)=>p+c.amount,0);
    
    const Income=tranctions.filter((tranctions)=>tranctions.amount>0)
    .reduce((p,c)=>p+c.amount,0);
  
    const Expenses=tranctions.filter((tranctions)=>tranctions.amount<0)
    .reduce((p,c)=>p+c.amount,0);


  return (
    <>
     <div className="row g-2">
            <div className="col-sm-12 col-md-6 col-lg-4 ">
             <div className="card p-3 bg-primary text-light">
                <h2>Income</h2>
                <h1>{Income}</h1>
             </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-4 ">
             <div className="card p-3 bg-danger text-light">
                <h2>Expenses</h2>
                <h1>{Expenses}</h1>
             </div>
            </div>
            
            <div className="col-sm-12 col-md-12 col-lg-4">
             <div className="card p-3 bg-success text-light">
                <h2>Balance</h2>
                <h1>{Balance}</h1>
             </div>
            </div>

          </div>
    </>
  )
}

export default Dashboard;
