import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Router from './components/router';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import './App.css';

/*
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
    ...dispatch
})

/*
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click
   */

  render() {
    return (
      <div className="App">
          <div className="logo">
              <div className="fadeIn first">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Service_mark.svg/2000px-Service_mark.svg.png" id="icon" alt="User Icon" />
              </div>
          </div>
        <Nav className="mr-auto">
          <Link to="/courses" className={"nav-link"}>Courses</Link>
          <Link to="/login" className={"nav-link"}>Login</Link>
         </Nav>
         <Router/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
