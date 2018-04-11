import React from 'react'
import { connect } from 'react-redux'
import {deleteUserTopic} from '../actions/topics'

class UserTopic extends React.Component {

  handleClick = () => {
    this.props.deleteUserTopic(this.props.topic.id)
  }
  render() {
    return(
      <li className='topic'>
        {this.props.topic.name}
         <a className='delete' onClick={this.handleClick}>X</a>
      </li>
    )
  }
}

export default connect(null, {deleteUserTopic})(UserTopic)
