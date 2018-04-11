import React from 'react'
import UserTopic from '../containers/UserTopic'
import '../stylesheets/Topics.css'

const UserTopicsList = ({topics}) => {
  const topicLis = topics.map(topic => {
    return <UserTopic key={topic.id} topic={topic}/>
  })
  return(
    <div className='topics-container sidebar'>
      <h1>My Topics</h1>
      <div className='topic-list'>
        {topicLis}
      </div>
    </div>
  )
}

export default UserTopicsList
