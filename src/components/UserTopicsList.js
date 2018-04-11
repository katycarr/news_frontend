import React from 'react'
import '../stylesheets/Topics.css'
import TopicListItem from './TopicListItem'
import DeleteTopicButton from '../containers/DeleteTopicButton'

const UserTopicsList = (props) => {
  const topicLis = props.topics.map(topic => {
    return <TopicListItem key={topic.id} topic={topic}>
      <DeleteTopicButton topic={topic} />
    </TopicListItem>
  })
  return(
    <div>
      <h1>My Topics</h1>
      {props.children}
      <div className='topic-list'>
        {topicLis}
      </div>
    </div>
  )
}

export default UserTopicsList
