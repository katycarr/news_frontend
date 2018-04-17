import React from 'react'
import { connect } from 'react-redux'
import { createTopic } from '../../actions/topics'


class AddTopicButton extends React.Component {

  handleClick = () => {
    this.props.createTopic(this.props.topic)
  }

  render() {
    if (this.props.userTopics.filter(t => t.id === this.props.topic.id).length >0) {
      return null
    } else {
      return <a className='delete' onClick={this.handleClick}>+</a>
    }
  }
}

function mapStateToProps(state) {
  return {
    userTopics: state.topics.all
  }
}

export default connect(mapStateToProps, {createTopic})(AddTopicButton)
