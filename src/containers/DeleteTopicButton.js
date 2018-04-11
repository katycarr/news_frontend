import React from 'react'
import { connect } from 'react-redux'
import {deleteUserTopic} from '../actions/topics'

class DeleteTopicButton extends React.Component {

  handleClick = () => {
    this.props.deleteUserTopic(this.props.topic.id)
  }
  render() {
    return(
        <a className='delete' onClick={this.handleClick}>X</a>
    )
  }
}

export default connect(null, {deleteUserTopic})(DeleteTopicButton)
