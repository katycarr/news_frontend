import React from 'react'
import { connect } from 'react-redux'
import SearchResultsList from './SearchResultsList'
import {clearTopicsSearch} from '../../actions/topics'
import SearchTopics from './Search'
import './SearchContainer.css'

class SearchContainer extends React.Component {

  componentWillUnmount = () => {
    this.props.clearTopicsSearch()
  }

  render() {
    return(
      <div className='search-topics'>
        <SearchTopics />
        <SearchResultsList topics={this.props.searchResults} />
      </div>
    )
  }


}

function mapStateToProps(state) {
  return {
    searchResults: state.topics.searchResults
  }
}

export default connect(mapStateToProps, {clearTopicsSearch})(SearchContainer)
