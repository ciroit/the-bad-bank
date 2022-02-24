
import React from 'react';

import {UserContext} from '../Shared/Context';

function History(){

    const [data, setData] = React.useState([]);   

    const ctx = React.useContext(UserContext);

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch(`http://localhost:3001/transaction/all/${ctx.userSession._id}`)
            .then(response => response.json())
            .then(result => {
                
                if(result.isSuccess){
                    setData(result.transactions);    
                }
                            
            });

    }, []);

    return (

        <>
            <div className="card mb-6 text-center">
                <div className="card-header">
                    <h3>Accounts</h3>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Account Number</th>
                                <th>Transaction</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((tr,index) => {
                                return (
                                <tr key={"u"+index}>
                                    <td>{tr.accountNumber}</td>
                                    <td>{tr.description}</td>
                                    <td>{tr.amount}</td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>            
        </>

    ); 

}

export default History;