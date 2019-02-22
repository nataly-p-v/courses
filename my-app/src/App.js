import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Router from './components/router';
import { Link } from 'react-router-dom';

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

        <header className="">
            <Link to="/">Courses</Link>
            <Link to="/login">Login</Link>
        </header>
        <Router/>
        <button onClick={this.simpleAction}>Test redux action</button>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));