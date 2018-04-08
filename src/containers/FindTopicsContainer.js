import React from 'react'
import { connect } from 'react-redux'
import { searchTopics, fetchTopics } from '../actions/topics'
import SearchResultsList from '../components/SearchResultsList'
import UserTopicsList from '../components/UserTopicsList'
import withAuth from '../hocs/withAuth'
import Nav from './Nav'
import PopularTopics from './PopularTopics'

class FindTopicsContainer extends React.Component {
  state = {
    input:''
  }

  componentDidMount = () => {
    if (this.props.topics.length === 0) {
      this.props.fetchTopics()
    }
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
      <div>
        <Nav />
        <PopularTopics />
        <UserTopicsList topics={this.props.topics} />
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
    )
  }
}

function mapStateToProps(state) {
  return {
    topics: state.topics.all,
    user: state.authentication.user,
    searchResults: state.topics.searchResults
  }
}

export default connect(mapStateToProps, {searchTopics, fetchTopics})(withAuth(FindTopicsContainer))
