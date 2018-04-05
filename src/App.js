import React, { Component } from 'react';
import './App.css';
import ArticleContainer from './containers/ArticleContainer'
import TopicsContainer from './containers/TopicsContainer'
import Signup from './containers/Signup'
import Login from './containers/Login'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.user.id ?
          <div>
            <ArticleContainer />
            <TopicsContainer />
          </div>
           :
        <div>
          <Signup />
          <Login />
        </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.authentication.user
  }
}
export default connect(mapStateToProps)(App);
