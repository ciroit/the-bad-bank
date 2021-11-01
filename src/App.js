
import './App.css';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import NavBar from './Shared/NavBar';
import Home from './Shared/Home';
import CreateAccount from './Account/CreateAccount'
import Login from './Security/Login';
import Deposit from './Account/Deposit'
import WithDraw from './Account/WithDraw'
import AllData from './Account/AllData'
import {UserContext} from './Shared/Context';


function App() {

  const usersInit = {users : [{name:'Abel', email : 'abel@mit.edu', balance : 3000, password : '12345678' }], 
                     history : [],
                     theme : {bgColor:'success', navBarColor: 'dark', textColor : 'white'},
                     userSession : null
                    };

  return (
    <HashRouter>
      <UserContext.Provider value={usersInit}>
      <NavBar />
      
        <div style = {{paddingLeft: '30px', paddingTop: '20px'}}>
        <Route path='/' exact component={Home} />
        <Route path='/createaccount' component={CreateAccount} />
        <Route path='/login' component={Login} />
        <Route path='/deposit' component={Deposit} />
        <Route path='/withdraw' component={WithDraw} />
        <Route path='/alldata' component={AllData} />
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
