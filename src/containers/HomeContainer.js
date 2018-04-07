import React from 'react'
import { logout } from '../actions/user'
import ArticleContainer from './ArticleContainer'
import TopicsContainer from './TopicsContainer'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
import {fetchTopics} from '../actions/topics'


class HomeContainer extends React.Component {

  logout = () => {
    localStorage.removeItem('token')
    this.props.logout()
  }

  componentDidMount = () => {
    this.props.fetchTopics()
  }

  render() {
    return(
      <div>
          <div className='home-container'>
            <TopicsContainer />
            <ArticleContainer />
          </div>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    topics: state.topics.all,
    user: state.authentication.user,
  }
}

export default connect(mapStateToProps, {logout, fetchTopics})(withAuth(HomeContainer))
