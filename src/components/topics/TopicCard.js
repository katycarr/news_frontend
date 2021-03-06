import React from 'react'
import { connect } from 'react-redux'
import { createTopic } from '../../actions/topics'


class TopicCard extends React.Component {

  handleClick = e => {
    const topic = {name: this.props.data.label, url: this.props.data.uri}
    this.props.createTopic(topic)
  }

  render() {
    const topic = this.props.data
    return(
      <div className='topic-result'>
        <h1>{topic.label}</h1>
        <p>{topic.description}</p>
        <a onClick={this.handleClick}>Add to topics</a>
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
