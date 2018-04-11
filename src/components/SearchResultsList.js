import React from 'react'
import TopicCard from '../containers/TopicCard'

const SearchResultsList = ({topics}) => {
  const topicCards = topics.map(topic => {
    return <TopicCard key={topic.uri} data={topic} />
  })
  return(
    <div className='results-list'>{topicCards}</div>
  )
}

export default SearchResultsList
