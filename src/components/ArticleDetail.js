import React from 'react'
import TopicPlus from '../containers/TopicPlus'

const ArticleDetail = ({article}) => {
  const articleTopics = article.topics.map(topic => {
    return <TopicPlus key={topic.id} topic={topic} />
  })
  return(
    <div>{articleTopics}</div>
  )
}

export default ArticleDetail
