import React from 'react'
import {connect} from 'react-redux'
import {getPopularTopics} from '../actions/topics'
import TopicListItem from '../components/TopicListItem'
import AddTopicButton from './AddTopicButton'

class PopularTopics extends React.Component {
  componentDidMount = () => {
    if (this.props.popTopics.length === 0) {
      this.props.getPopularTopics()
    }
  }

  render() {
    const topics = this.props.popTopics.map(topic => {
      return <TopicListItem key={topic.id} topic={topic}>
        <AddTopicButton topic={topic} />
      </TopicListItem>
    })
    return (
      <div className='popular-topics topics-container'>
        <h1>Popular Topics</h1>
        <div className='topic-list'>
          {topics}
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    popTopics: state.topics.popular
  }
}
export default connect(mapStateToProps, {getPopularTopics})(PopularTopics)
