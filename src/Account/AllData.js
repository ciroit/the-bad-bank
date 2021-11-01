
import React from 'react';

import {UserContext} from '../Shared/Context';

function AllData(){

    const ctx = React.useContext(UserContext);

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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ctx.users.map((user,index) => {
                                return (
                                <tr key={"u"+index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.balance}</td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <br/>
            <div className="card text-center">
                <div className="card-header">
                    <h3>History</h3>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Operation</th>
                                <th>Amount</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ctx.history.map( (h, index) => {
                                
                                var hClassName = '';

                                if(h.operation == 'Deposit'){
                                    hClassName = 'table-success'
                                }else{
                                    hClassName = 'table-danger'
                                }

                                return (
                                <tr key={"h"+index} className={hClassName} >
                                    <td>{h.name}</td>
                                    <td>{h.operation}</td>
                                    <td className='text-right' >{h.amount}</td>
                                    <td>{h.date}</td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    ); 

}

export default AllData;