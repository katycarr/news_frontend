import React from 'react'
import ArticleCard from './ArticleCard'

const ArticleGroup = (props) => {

  const articleCards = props.articles.map(article => {
    return <ArticleCard key={article.id} article={article}/>
  })
  return(
    <div className='articles-container'>
      {articleCards}
    </div>
  )
}

export default ArticleGroup
