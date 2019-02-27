import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor (props) {
      super(props);
      this.state = {
          login: '',
          password: '',
          loginValid: false,
          passwordValid: false,
          formValid: false,
          redirectToReferrer: false
        };
      this.handleUserLogin = this.handleUserLogin.bind(this);
      this.handleUserPassword = this.handleUserPassword.bind(this);
      this.submitLoginForm = this.submitLoginForm.bind(this);
    }

    handleUserLogin = ({ target: { value } }) => {

        this.setState({
            login: value
        },
        () => { this.validateLoginField(value) });
    };

    handleUserPassword = ({ target: { value } }) => {
        this.setState({
            password: value
        },
        () => { this.validatePasswordField(value) });
    };



    validateLoginField(value) {
        let regexp = /[a-zA-Z]+/g;
        let loginValid = regexp.test(value);

        this.setState({
            loginValid: loginValid
        }, this.validateForm);
    }

    validatePasswordField(value) {
        let regexp = /^\w+$/g;
        let passwordValid = regexp.test(value);

        this.setState({
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.loginValid && this.state.passwordValid});
    }
    submitLoginForm (e) {
        e.preventDefault();
        this.setState({
            redirectToReferrer: true
        })
    }


    render () {
        const redirectToReferrer = this.state.redirectToReferrer;
            if (redirectToReferrer === true) {
                return <Redirect to="/courses"/>
            }
        return (
                <div className="wrapper ">
                  <div className="formContent">
                    <Form className={`form-wrapper`} onSubmit={this.submitLoginForm}>
                        <div className="error">wrong login or password</div>
                      <Form.Group controlId="formBasicLogin">
                        <Form.Label>Login</Form.Label>
                        <Form.Control type="text" name="login" placeholder="Enter login" className={`second input ${this.state.loginValid ? '' : 'has-error'}`} value={this.state.login} onChange={this.handleUserLogin}/>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" className={`third input ${this.state.passwordValid ? '' : 'has-error'}`} value={this.state.password} onChange={this.handleUserPassword}/>
                      </Form.Group>
                      <Button variant="primary" type="submit"  className="fourth btn btn-primary" disabled={!this.state.formValid}>
                        Login
                      </Button>
                    </Form>

                  </div>

                </div>
        )
    }
}
export default Login;
