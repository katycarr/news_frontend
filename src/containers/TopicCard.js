import React from 'react'
import { connect } from 'react-redux'
import { createTopic } from '../actions/topics'


class TopicCard extends React.Component {

  handleClick = e => {
    this.props.createTopic(this.props.data)
  }

  render() {
    const topic = this.props.data
    return(
      <div>
        <h1>{topic.label}</h1>
        <p>{topic.description}</p>
        <button onClick={this.handleClick}>Add to topics</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authentication.user
  }
}

export default connect(mapStateToProps, {createTopic})(TopicCard)
