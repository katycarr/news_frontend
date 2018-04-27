import React, { Component } from 'react';
import './stylesheets/App.css'
import {Route, withRouter} from 'react-router-dom'
import ReadingsScreen from './components/screens/Readings'
import SignupScreen from './components/screens/Signup'
import LoginScreen from './components/screens/Login'
import HomeScreen from './components/screens/Home'
import FindTopicsScreen from './components/screens/FindTopics'
import ArchiveScreen from './components/screens/Archive'




class App extends Component {

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <HomeScreen />} />
        <Route path='/login' render={() => <LoginScreen />} />
        <Route path='/signup' render={() => <SignupScreen />} />
        <Route path='/topics' render={() => <FindTopicsScreen />} />
        <Route path='/readinglist' render={() => <ReadingsScreen /> } />
        <Route path='/archive' render={() => <ArchiveScreen /> } />
      </div>
    );
  }
}

export default withRouter(App);
