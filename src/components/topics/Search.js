import React from 'react'
import { searchTopics } from '../../actions/topics'
import { connect } from 'react-redux'

class SearchTopics extends React.Component {
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
      <div>
        <h1>Search for topics</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='input' value={this.state.input} onChange={this.handleChange} />
          <input type='submit' name='submit'/>
        </form>
      </div>
    )
  }
}

export default connect(null, {searchTopics})(SearchTopics)
