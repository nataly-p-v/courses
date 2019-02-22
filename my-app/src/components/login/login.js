import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        }
      this.handleUserInput = this.handleUserInput.bind(this);
    }

    handleUserInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({[name]: value});
    }

    render () {
        return (
                <div className="wrapper fadeInDown">
                  <div className="formContent">

                    <div className="fadeIn first">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/2000px-Service_mark.svg.png" id="icon" alt="User Icon" />
                    </div>

                    <Form className="form-wrapper">
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="fadeIn second input" value={this.state.email} onChange={this.handleUserInput}/>
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className="fadeIn third input" value={this.state.password} onChange={this.handleUserInput}/>
                      </Form.Group>
                      <Button variant="primary" type="submit"  className="fadeIn fourth">
                        Login
                      </Button>
                    </Form>

                  </div>
                </div>
        )
    }
}
export default Login;
