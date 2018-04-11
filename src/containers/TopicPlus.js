import React from 'react'
import { connect } from 'react-redux'
import { createTopic } from '../actions/topics'

class TopicPlus extends React.Component {

  handleClick = () => {
    this.props.createTopic(this.props.topic)
  }
  render() {
    return (
      <li className='topic'>{this.props.topic.name}
        {this.props.userTopics.filter(t => t.id === this.props.topic.id).length >0 ? null :
        <a className='delete' onClick={this.handleClick}>+</a>
        }
      </li>
    )
  }
}

function mapStateToProps(state) {
  return {
    userTopics: state.topics.all
  }
}

export default connect(mapStateToProps, {createTopic})(TopicPlus)
