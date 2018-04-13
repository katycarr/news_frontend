import React from 'react'
import { connect } from 'react-redux'
import { searchTopics } from '../../actions/topics'
import SearchResultsList from '../topics/SearchResultsList'
import PopularTopics from '../topics/PopularTopics'
import Page from '../Page'
import '../../stylesheets/Popular.css'
import '../../stylesheets/FindTopics.css'

class FindTopicsContainer extends React.Component {
  state = {
    input:''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.searchTopics(this.state.input)
    this.setState({input:''})
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <Page>
        <PopularTopics />

        <div className='search-topics'>
          <h1>Search for topics</h1>
          <form onSubmit={this.handleSubmit}>
            <input type='text' name='input' value={this.state.input} onChange={this.handleChange} />
            <input type='submit' name='submit'/>
          </form>
          {this.props.searchResults.length > 0 ?
            <SearchResultsList topics={this.props.searchResults} />
            :
            null
          }
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

export default connect(mapStateToProps, {searchTopics})(FindTopicsContainer)
