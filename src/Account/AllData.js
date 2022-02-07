
import React from 'react';

import {UserContext} from '../Shared/Context';

function AllData(){

    const [data, setData] = React.useState([]);    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('http://localhost:3001/account/all')
            .then(response => response.json())
            .then(result => {
                
                if(result.isSuccess){
                    setData(result.accounts);    
                }
                            
            });

    }, []);

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
                            {data.map((user,index) => {
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
        </>

    ); 

}

export default AllData;