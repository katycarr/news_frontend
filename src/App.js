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
import {fetchArticles} from './actions/articles'
import {getReadings} from './actions/readings'
import ViewReadings from './containers/ViewReadings'




class App extends Component {
  componentDidMount = () => {
    this.props.fetchTopics()
    this.props.fetchArticles()
    this.props.getReadings()
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <HomeContainer />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/signup' render={() => <Signup />} />
        <Route path='/topics' render={() => <FindTopicsContainer />} />
        <Route path='/readinglist' render={() => <ViewReadings /> } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authentication.user
  }
}

export default withRouter(connect(mapStateToProps, {getUser, fetchTopics, fetchArticles, getReadings})(App));
