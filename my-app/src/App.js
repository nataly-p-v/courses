import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Router from './components/router';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import './App.css';

import { simpleAction } from './actions/simpleAction'

/*
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
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
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <Nav className="mr-auto">
          <Link to="/" className={"nav-link"}>Courses</Link>
          <Link to="/login" className={"nav-link"}>Login</Link>
         </Nav>
         <Router/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
