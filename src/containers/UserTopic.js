import React from 'react'
import { connect } from 'react-redux'
import {deleteUserTopic} from '../actions/topics'

class UserTopic extends React.Component {

  handleClick = () => {
    this.props.deleteUserTopic(this.props.topic.id)
  }
  render() {
    return(
      <li>
        {this.props.topic.name}
        <button onClick={this.handleClick}>X</button>
      </li>
    )
  }
}

export default connect(null, {deleteUserTopic})(UserTopic)
