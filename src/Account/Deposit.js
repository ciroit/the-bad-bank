import React, {useEffect, useState} from 'react'

import {UserContext, Card} from '../Shared/Context'

import {Formik, Form, Field, ErrorMessage} from 'formik'

function Deposit(){

    const [accounts, setAccounts] = useState([]);
    const [variable, setVariable] = useState(null);
    //const [balance, setBalance] = useState(0);
    //const [accountNumber, setAccountNumber] = useState('');

    const ctx = React.useContext(UserContext);

    useEffect(() => {

        fetch(`http://localhost:3001/account/list/${ctx.userSession._id}`)
        .then(response => response.text())
        .then(text => {
            
                const result = JSON.parse(text);

                if(result.isSuccess){

                    setAccounts(result.accounts);

                }else{

                    showErrorMessage(result.message);

                } 

                console.log('JSON:', result);

        })
        .catch(err => {

            console.log(err);

            showErrorMessage('An error ocurred');

        });

    }, [variable]);

    function isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!  
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
               !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }

    const validateAmount = (value)=>{

        var error = ''

        if(!isNumeric(value)){
            error = 'You must enter a number'
        }else{
            var amount = parseFloat(value);

            if(amount <= 0){
                error = 'You must enter an amount greater than 0'
            }
        }

        return  error;
    }

    const validateAccountNumber = (value) => {

        console.log('validateAccountNumber - ' + value);

        var error = ''

        if( value == ''){
            error = 'You must select a Account Number'
            document.getElementById("balance").value = "0";
        } else{

            var accountNumberSelected =  value;

            var accountSelected = accounts.find( a => a.accountNumber == accountNumberSelected);

            if(accountSelected){
                //setAccountNumber(accountNumberSelected);
                //setBalance(accountSelected.amount);
                document.getElementById("balance").value = accountSelected.amount + "";
            }else{
                //setAccountNumber('');
                //setBalance(0);
                document.getElementById("balance").value = "0";
            }

        }

        return  error; 

    }

    const showSuccessMessage = (message) => {

        var alertPlaceholder = document.getElementById('divMessage')

        alertPlaceholder.innerHTML = '<div class="alert alert-success alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    }

    const showErrorMessage = (message) => {

        var alertPlaceholder = document.getElementById('divMessage')

        alertPlaceholder.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    }

    const handleSubmit = (value, {resetForm})=>{
        debugger;
        var amount = parseFloat(value.amount);
        var accountNumber = value.accountNumber;

        fetch(`http://localhost:3001/account/update/${ctx.userSession._id}/${accountNumber}/${amount}`)
        .then(response => response.text())
        .then(text => {
            
                const result = JSON.parse(text);

                if(result.isSuccess){

                    ctx.userSession.balance = result.accountUpdated.balance;

                    resetForm();

                    setVariable(new Date());

                    document.getElementById("balance").value = "";
                    
                    showSuccessMessage(result.message);
                }else{

                    showErrorMessage(result.message);

                } 

                console.log('JSON:', result);

        })
        .catch(err => {

            console.log(err);

            showErrorMessage('An error ocurred');

        });

        /*
        var date = new Date();

        var formatDate = date.getFullYear() +'-'+ date.getMonth()+'-'+date.getDate()+' '+ date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

        ctx.history.push({name:ctx.userSession.name, operation : 'Deposit', amount, date: formatDate});
        */
    }

    return (

        <Card 
            header = 'Deposit'
            body = {(
                <>
                    <Formik
                        initialValues={{amount:'', accountNumber:'', balance:0}}
                        onSubmit = {handleSubmit}
                    >
                        
                        {props => (
                            
                            <Form>
                                Account : 
                                <br/>
                                <Field className='form-control' name='accountNumber' component='select' validate={validateAccountNumber}>
                                    <option value='' >-Select-</option>
                                    {accounts.map((e, key)=> {
                                        return <option key={key} value={e.accountNumber} >{e.accountNumber}</option>
                                    })}
                                </Field>
                                {props.errors.accountNumber ? <div>{props.errors.accountNumber}</div> : null}
                                <br/>
                                Balance :
                                <br/>
                                <input className='form-control' type='text' id='balance' name='balance'  disabled />
                                <br/>
                                Amount :
                                <br/>
                                <Field className='form-control' type='text' name='amount' placeholder='Enter amount' validate={validateAmount} />                            
                                {props.errors.amount ? <div>{props.errors.amount}</div> : null}
                                <br/>
                                <button type="submit" className="btn btn-light" disabled={!(props.isValid && props.dirty)} >Deposit</button>
                                    
                            </Form>

                        )}
                    
                    </Formik>
                    <br/>
                    <div id="divMessage">
                    </div>
                </>
            )}
        />

    ); 

}

export default Deposit;