import React from 'react'
import ArticleContainer from './ArticleContainer'
import { connect } from 'react-redux'
import withAuth from '../hocs/withAuth'
import {fetchTopics} from '../actions/topics'
import Page from '../components/Page'



class HomeContainer extends React.Component {

  render() {
    return(
        <div className='home-container'>
          <Page withFilters={true}>
            <ArticleContainer />
          </Page>
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
