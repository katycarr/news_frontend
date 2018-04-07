import React, { Component } from 'react';
import './App.css';
import Signup from './containers/Signup'
import Login from './containers/Login'
import { connect } from 'react-redux'

import HomeContainer from './containers/HomeContainer'
import {getUser} from './actions/user'
import './stylesheets/App.css'
import FindTopicsContainer from './containers/FindTopicsContainer'
import {Route, withRouter} from 'react-router-dom'
import {fetchTopics} from './actions/topics'




class App extends Component {


  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <HomeContainer />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/signup' render={() => <Signup />} />
        <Route path='/topics' render={() => <FindTopicsContainer />} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authentication.user
  }
}

export default withRouter(connect(mapStateToProps, {getUser, fetchTopics})(App));
