import React  from "react";
import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {UserContext, Card} from '../Shared/Context'

function Login(){

  const [value, setValue] = React.useState(null);

  const ctx = React.useContext(UserContext);  

  const handleSubmit = (values)=>{

    fetch(`http://localhost:3001/account/login/${values.email}/${values.password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const result = JSON.parse(text);

            if(result.isSuccess){

              ctx.userSession = result.user;
        
              setValue(Date.now);
        
              window.location.href = '#';
        
            }else{
              showErrorMessage(result.message);
            }

            console.log('JSON:', result);
        } catch(err) {

          console.log(text);
          showErrorMessage('The email and / or password are incorrect.');

        }
    })
    .catch(err => {

      console.log(err);

      showErrorMessage('An error ocurred');

    });
      
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