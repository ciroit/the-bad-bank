import React from 'react'

import {UserContext, Card} from '../Shared/Context'

import {Formik, Form, Field, ErrorMessage} from 'formik'

function Deposit(){

    const ctx = React.useContext(UserContext);

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

    const showSuccessMessage = (message) => {

        var alertPlaceholder = document.getElementById('divMessage')

        alertPlaceholder.innerHTML = '<div class="alert alert-success alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    }

    const showErrorMessage = (message) => {

        var alertPlaceholder = document.getElementById('divMessage')

        alertPlaceholder.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    }

    const handleSubmit = (value, {resetForm})=>{
        
        var amount = parseFloat(value.amount);

        fetch(`http://localhost:3001/account/update/${ctx.userSession.email}/${amount}`)
        .then(response => response.text())
        .then(text => {
            
                const result = JSON.parse(text);

                if(result.isSuccess){

                    ctx.userSession.balance = result.accountUpdated.balance;

                    resetForm();
                    
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
                        initialValues={{amount:''}}
                        onSubmit = {handleSubmit}
                    >
                        
                        {props => (
                            
                            <Form>
                                Balance :
                                <br/>
                                <input className='form-control' type='text' value={ctx.userSession.balance} disabled />
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