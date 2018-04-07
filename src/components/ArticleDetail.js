import React from 'react'

const ArticleDetail = ({article}) => {
  const articleTopics = article.topics.map(topic => {
    return <span key={topic.id}>{topic.name} </span>
  })
  return(
    <div>{articleTopics}</div>
  )
}

export default ArticleDetail
