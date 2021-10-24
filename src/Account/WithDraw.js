import React from 'react'

import {UserContext, Card} from '../Shared/Context'

import {Formik, Form, Field, ErrorMessage} from 'formik'

function WithDraw(){

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

            var balance = ctx.users[0].balance;

            if(amount <= 0){
                error = 'You must enter an amount greater than 0'
            }
            else if(balance < amount){
                error = 'You must enter a lower number to the balance'
            }
        }

        return  error;
    }

    const handleSubmit = (value, {resetForm})=>{
        
        var amount = parseFloat(value.amount);

        ctx.users[0].balance -= amount;

        ctx.history.push({name:ctx.users[0].name, operation : 'Withdraw', amount});

        resetForm();

    }

    return (

        <Card 
            bgColor = 'primary'
            header = 'Withdraw'
            body = {(
                <Formik
                    initialValues={{amount:0}}
                    onSubmit = {handleSubmit}
                >
                    
                    {props => (

                        <Form>
                            Balance :
                            <br/>
                            <input className='form-control' type='text' value={ctx.users[0].balance} disabled />
                            <br/>
                            Amount :
                            <br/>
                            <Field className='form-control' type='text' name='amount' placeholder='Enter amount' validate={validateAmount} />
                            <ErrorMessage name="amount" />
                            <br/>
                            <button type="submit" className="btn btn-light" disabled={!(props.isValid && props.dirty)} >Withdraw</button>
                                
                        </Form>

                    )}

                </Formik>
            )}
        />

    ); 

}

export default WithDraw;