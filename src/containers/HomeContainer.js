import React from 'react'
import ArticleContainer from './ArticleContainer'
import TopicsContainer from './TopicsContainer'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
import {fetchTopics} from '../actions/topics'
import Nav from './Nav'
import FilterGroup from '../components/FilterGroup'


class HomeContainer extends React.Component {

  render() {
    return(
        <div className='home-container'>
          <Nav />
          <TopicsContainer>
            <FilterGroup />
          </TopicsContainer>
          <ArticleContainer />
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
