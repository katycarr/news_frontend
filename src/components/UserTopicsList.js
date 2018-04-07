import React from 'react'
import UserTopic from '../containers/UserTopic'

const UserTopicsList = ({topics}) => {
  const topicLis = topics.map(topic => {
    return <UserTopic key={topic.id} topic={topic}/>
  })
  return(
    <div>{topicLis}</div>
  )
}

export default UserTopicsList
