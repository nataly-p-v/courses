import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormErrors } from './formErrors';

class Login extends Component {
    constructor (props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          formErrors: {email: '', password: ''},
          emailValid: false,
          passwordValid: false,
          formValid: false
        };
      this.handleUserInput = this.handleUserInput.bind(this);
    }


    handleUserInput = (e) => {
        const type = e.target.type;
        const value = e.target.value;
        this.setState({[type]: value},
            () => { this.validateField(type, value) });
    }



    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }

    render () {
        return (
                <div className="wrapper fadeInDown">
                  <div className="formContent">

                    <div className="fadeIn first">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/2000px-Service_mark.svg.png" id="icon" alt="User Icon" />
                    </div>
                      <div className="panel panel-default">
                          <FormErrors formErrors={this.state.formErrors} />
                      </div>

                    <Form className={`form-wrapper`}>
                      <Form.Group controlId="formBasicEmail" className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="fadeIn second input" value={this.state.email} onChange={this.handleUserInput}/>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword" className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className="fadeIn third input" value={this.state.password} onChange={this.handleUserInput}/>
                      </Form.Group>
                      <Button variant="primary" type="submit"  className="fadeIn fourth btn btn-primary" disabled={!this.state.formValid}>
                        Login
                      </Button>
                    </Form>

                  </div>
                </div>
        )
    }
}
export default Login;
