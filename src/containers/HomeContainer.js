import React from 'react'
import ArticleContainer from './ArticleContainer'
import TopicsContainer from './TopicsContainer'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
import {fetchTopics} from '../actions/topics'
import Nav from './Nav'


class HomeContainer extends React.Component {



  componentDidMount = () => {
    this.props.fetchTopics()
  }

  render() {
    return(
      <div>
        <Nav />
        <div className='home-container'>
          <TopicsContainer />
          <ArticleContainer />
        </div>
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

export default connect(mapStateToProps, {fetchTopics})(withAuth(HomeContainer))
