import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getUser} from './actions/user'
import './stylesheets/App.css'
import {Route, withRouter} from 'react-router-dom'
import {fetchTopics} from './actions/topics'
import {fetchArticles} from './actions/articles'
import {getReadings} from './actions/readings'
import ReadingsScreen from './components/screens/Readings'
import SignupScreen from './components/screens/Signup'
import LoginScreen from './components/screens/Login'
import HomeScreen from './components/screens/Home'
import FindTopics from './components/app/FindTopics'
import Archive from './components/app/Archive'




class App extends Component {
  // componentDidMount = () => {
  //   if(this.props.user) {
  //     this.props.fetchTopics()
  //     this.props.fetchArticles()
  //     this.props.getReadings()
  //   }
  // }
  //
  // componentWillReceiveProps = (nextProps) => {
  //   if(nextProps.user && nextProps.user !== this.props.user) {
  //     this.props.fetchTopics()
  //     this.props.fetchArticles()
  //     this.props.getReadings()
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <HomeScreen />} />
        <Route path='/login' render={() => <LoginScreen />} />
        <Route path='/signup' render={() => <SignupScreen />} />
        <Route path='/topics' render={() => <FindTopics />} />
        <Route path='/readinglist' render={() => <ReadingsScreen /> } />
        <Route path='/archive' render={() => <Archive /> } />
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     user: state.authentication.user
//   }
// }

export default withRouter(connect(null, {getUser, fetchTopics, fetchArticles, getReadings})(App));
