import React from 'react'
import ArticleCard from './ArticleCard'

const ArticleGroup = (props) => {

  const articleCards = props.articles.map(article => {
    return <div key={article.id} ><ArticleCard article={article}/><div className='line'></div></div>
  })
  return(
    <div className='articles-container'>
      {articleCards}
      {props.children}
    </div>
  )
}

export default ArticleGroup
