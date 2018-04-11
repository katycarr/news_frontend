import React from 'react'
import AddToReading from '../buttons/AddToReading'
import ArticleTags from './ArticleTags'

class ArticleCard extends React.Component {

  render() {
    const date = new Date(this.props.article.published_at)
    return(
      <div className='article'>
        {this.props.article.img_url ?<img src={this.props.article.img_url} alt={this.props.article.title} className='article-img'/>
        : null }
        <div className='article-content'>
          <a href={this.props.article.url}><h3>{this.props.article.title}</h3></a>
          <AddToReading article={this.props.article} />
          <h5>{this.props.article.author} - {this.props.article.source}</h5>
          <p>{date.toDateString()} {date.toLocaleTimeString()}</p>
          <p>Reading Time: {this.props.article.reading_time} | Tone: {this.props.article.emotion}</p>
          <p>{this.props.article.description}</p>
          <ArticleTags article={this.props.article} />
        </div>
      </div>
    )
  }
}

export default ArticleCard
