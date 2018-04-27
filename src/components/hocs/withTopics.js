import React from 'react'
import {fetchTopics} from '../../actions/topics'
import { connect } from 'react-redux'


function withTopics(WrappedComponent) {
  class TopicComponent extends React.Component {

    componentDidMount = () => {
      this.props.fetchTopics()
    }

    render() {
      return(
        <WrappedComponent {...this.props} />
      )
    }
  }

  return connect(null, {fetchTopics})(TopicComponent)
}

export default withTopics
