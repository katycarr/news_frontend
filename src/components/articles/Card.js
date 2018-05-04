import React from 'react'
import ArticleTags from './ArticleTags'
import DisplayArticle from './Display'
import ReactTooltip from 'react-tooltip'

const ArticleCard = props => {
  return(
    <div className='article'>
      <ReactTooltip type='info'/>
      <DisplayArticle article={props.article} />
      <ArticleTags article={props.article} />
    </div>
  )
}



export default ArticleCard
