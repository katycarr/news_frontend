import React from 'react'
import ArticleCard from './ArticleCard'

const ArticleGroup = (props) => {

  const articleCards = props.articles.map(article => {
    return <ArticleCard key={article.id} article={article}/>
  })
  return(
    <div className='articles-container'>
      {articleCards}
      {props.children}
    </div>
  )
}

export default ArticleGroup
