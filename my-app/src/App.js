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
          <Nav.Link><Link to="/">Courses</Link></Nav.Link>
          <Nav.Link> <Link to="/login">Login</Link></Nav.Link>
         </Nav>
         <Router/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));