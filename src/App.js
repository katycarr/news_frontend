import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getUser} from './actions/user'
import './stylesheets/App.css'
import {Route, withRouter} from 'react-router-dom'
import {fetchTopics} from './actions/topics'
import {fetchArticles} from './actions/articles'
import {getReadings} from './actions/readings'
import ViewReadings from './components/app/ViewReadings'
import Signup from './components/app/Signup'
import Login from './components/app/Login'
import Home from './components/app/Home'
import FindTopics from './components/app/FindTopics'




class App extends Component {
  componentDidMount = () => {
    this.props.fetchTopics()
    this.props.fetchArticles()
    this.props.getReadings()
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <Home />} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/signup' render={() => <Signup />} />
        <Route path='/topics' render={() => <FindTopics />} />
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
