import React  from "react";
import * as Yup from "yup";

import {UserContext, Card} from '../Shared/Context'

import {Formik, Form, Field, ErrorMessage} from 'formik'

function CreateAccount(){

    console.log('Rendering CreateAccount Component');

    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const ctx = React.useContext(UserContext);  

    const validationSchema = Yup.object().shape({
      name: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email')
        .required('Required'),
      password : Yup.string()
        .min(8, 'The password must be at least 8 characters long!')
        .required('Required')
    });

    function handleSubmit(values){
      ctx.users.push(values);
      setShow(false);
    }

    function clearForm(){
        setShow(true);
    }


    return (
        <Card
            bgColor="primary"
            header="Create Account"
            status={status}
            body={show ? ( 
                                       
                    <Formik 
                      initialValues={{name:'', email:'', password:'', balance:0}}
                      validationSchema={validationSchema}
                      onSubmit = {handleSubmit}
                      enableReinitialize = {true}
                    >     

                      {props => (

                          <Form>
                            Name*<br/>
                            <Field className="form-control" name="name" placeholder="Enter name"/>                            
                            <ErrorMessage name="name" />
                            <br/>
                            Email address*
                            <br/>
                            <Field className="form-control" type='email' name="email" placeholder="Enter email"/>
                            <ErrorMessage name="email" />
                            <br/>
                            Password*
                            <br/>
                            <Field className="form-control" type='password' name="password" placeholder="Enter password"/>
                            <ErrorMessage name="password" />
                            <br/>
                            <p> Note : The fields with an asterisk are required</p>
                            <button type="submit" className="btn btn-light" disabled={!(props.isValid && props.dirty)} >Create Account</button>
                            
                          </Form>

                      )}                        
                
                    </Formik>
                    
                ):(
                    <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                    </>
                )}
        />
    )
      
}
export default CreateAccount;