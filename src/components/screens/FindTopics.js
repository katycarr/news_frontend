import React from 'react'
import { connect } from 'react-redux'
import SearchResultsList from '../topics/SearchResultsList'
import PopularTopics from '../topics/PopularTopics'
import Page from '../Page'
import '../../stylesheets/Popular.css'
import '../../stylesheets/FindTopics.css'
import withAuth from '../hocs/withAuth'
import SearchTopics from '../topics/Search'
import {clearTopicsSearch} from '../../actions/topics'
import { compose } from 'redux'


class FindTopicsScreen extends React.Component {

  componentWillUnmount = () => {
    this.props.clearTopicsSearch()
  }

  render() {
    return(
      <Page>
        <PopularTopics />
        <div className='search-topics'>
          <SearchTopics />
          <SearchResultsList topics={this.props.searchResults} />
        </div>
      </Page>
    )
  }
}

function mapStateToProps(state) {
  return {
    searchResults: state.topics.searchResults
  }
}

export default compose(withAuth, connect(mapStateToProps, {clearTopicsSearch}))(FindTopicsScreen)
