import React from 'react'
import { connect } from 'react-redux'
import { createTopic } from '../actions/topics'

class TopicPlus extends React.Component {

  handleClick = () => {
    this.props.createTopic(this.props.topic)
  }
  render() {
    return (
      <li>{this.props.topic.name} <button onClick={this.handleClick}>+</button></li>
    )
  }
}

export default connect(null, {createTopic})(TopicPlus)
