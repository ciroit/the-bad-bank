
import React from 'react';

import {UserContext} from '../Shared/Context';

function AllData(){

    const ctx = React.useContext(UserContext);

    return (

        <>
            <div class="card mb-6 text-center">
                <div class="card-header">
                    Accounts
                </div>
                <div class="card-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ctx.users.map(user => {
                                return (<tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.balance}</td>
                                </tr>);
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <br/>
            <div class="card text-center">
                <div class="card-header">
                    History
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Operation</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ctx.history.map(h => {
                                
                                var hClassName = '';

                                if(h.operation == 'Deposit'){
                                    hClassName = 'table-success'
                                }else{
                                    hClassName = 'table-danger'
                                }

                                return (
                                <tr className={hClassName} >
                                    <td>{h.name}</td>
                                    <td>{h.operation}</td>
                                    <td>{h.amount}</td>
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