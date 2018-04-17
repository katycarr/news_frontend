import React from 'react'
import TimeAgo from 'react-timeago'



const DisplayArticle = (props) => {

  const date = new Date(props.article.published_at)

  return(
    <div className='article'>
      {props.article.img_url ?<img src={props.article.img_url} alt={props.article.title} className='article-img'/>
      : null }
      <div className='article-content'>
        <a href={props.article.url}><h3>{props.article.title}</h3></a>
        <h5>{props.article.author} - {props.article.source}</h5>
        <p className='timestamp'><TimeAgo date={date}/></p>
        <p>Reading Time: {props.article.reading_time} | Tone: {props.article.emotion}</p>
        <p>{props.article.description}</p>
      </div>
    </div>
  )
}

export default DisplayArticle
