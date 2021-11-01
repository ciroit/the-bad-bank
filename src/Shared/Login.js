import React  from "react";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {UserContext, Card} from '../Shared/Context'

function Login(){


return (
    <Card 
        header="Login"
        body ={
            <Formik>
                <Form>
                    
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
            </Formik>
        }
    />

);


}

export default Login;