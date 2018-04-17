import React from 'react'
import TopicListItem from '../TopicListItem'
import DeleteTopic from '../buttons/DeleteTopic'
import CollabsibleMenu from './CollapsibleMenu'

class UserTopicsList extends React.Component {

  render() {
    const topicLis = this.props.topics.map(topic => {
      return <TopicListItem key={topic.id} topic={topic}>
        <DeleteTopic topic={topic} />
      </TopicListItem>
    })

    return(
      <div>
        <CollabsibleMenu title='My Topics'>
          {topicLis}
        </CollabsibleMenu>
      </div>
    )
  }
}

export default UserTopicsList
