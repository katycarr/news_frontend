import React from 'react'
import { connect } from 'react-redux'
import { fetchTopics } from '../actions/topics'

class TopicsContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchTopics(this.props.user.id)
  }

  render() {
    const topics = this.props.topics.map(topic => {
      return <li key={topic.id}>{topic.name}</li>
    })
    return(<div>{topics}</div>)
  }
}

function mapStateToProps(state) {
  return {
    topics: state.topics.all,
    user: state.authentication.user
  }
}

export default connect(mapStateToProps, {fetchTopics})(TopicsContainer)
