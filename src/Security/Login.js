import React  from "react";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {UserContext, Card} from '../Shared/Context'

function Login(){

  const [value, setValue] = React.useState(null);

  const ctx = React.useContext(UserContext);  

  const handleSubmit = (values)=>{

    var findIndex = ctx.users.findIndex( u => {

      if(u.email == values.email && u.password == values.password){

        return true;

      }
      else return false;

    });

    if(findIndex>=0){

      ctx.userSession = ctx.users[findIndex];

      setValue(Date.now);

      window.location.href = '#';

    }else{
      showErrorMessage('The email and / or password are incorrect.');
    }
      

      
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password : Yup.string()
      .required('Required')
  });

  const showErrorMessage = (message) => {

    var alertPlaceholder = document.getElementById('divMessage')

    alertPlaceholder.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

}


    return (
      <Card 
          header="Login"
          body ={
            <>
              <Formik
              initialValues={{ email:'', password:''}}
              validationSchema={validationSchema}
              onSubmit = {handleSubmit}
              enableReinitialize = {true}
              >
                {props => (

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
                      <button type="submit" className="btn btn-light" disabled={!(props.isValid && props.dirty)} >Login</button>
                  
                  </Form>

                )} 
              </Formik>
              <br/>
              <div id="divMessage">
              </div>
            </>
          }
      />

    )


}

export default Login;