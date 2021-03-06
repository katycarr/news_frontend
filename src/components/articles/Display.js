import React from 'react'
import ArticleMeta from './Meta'
import LabelWithPop from '../sources/LabelWithPop'
import ReadingButton from './ReadingButton'


const DisplayArticle = (props) => {

  return(
    <div >
      <ArticleMeta date={new Date(props.article.published_at)} tone={props.article.emotion} readingtime={props.article.reading_time}>
        <ReadingButton article={props.article} />
      </ArticleMeta>
      {props.article.img_url ?<img src={props.article.img_url} alt={props.article.title} className='article-img'/>
      : null }
      <div className='article-content'>
        <a href={props.article.url} target="_blank"><h3>{props.article.title}</h3></a>
        <p>{props.article.author}</p>
        <LabelWithPop source={props.article.source} />
        <p>{props.article.description}</p>
      </div>
    </div>
  )
}

export default DisplayArticle
