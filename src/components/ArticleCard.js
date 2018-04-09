import React from 'react'
import ArticleDetail from './ArticleDetail'

class ArticleCard extends React.Component {
  state = {
    showDetail: false
  }

  handleClick = () => {
    this.setState({
      showDetail: !this.state.showDetail
    })
  }

  render() {
    const date = new Date(this.props.article.published_at)
    return(
      <div className='article'>
        {this.props.article.img_url ?<img src={this.props.article.img_url} alt={this.props.article.title} className='article-img'/>
        : null }
        <div className='article-content'>
          <a href={this.props.article.url}><h3>{this.props.article.title}</h3></a>
          <h5>{this.props.article.author} - {this.props.article.source}</h5>
          <p>{date.toDateString()} {date.toLocaleTimeString()}</p>
          <p>{this.props.article.reading_time}</p>
          <button onClick={this.handleClick}>Toggle Detail</button>
          <p>{this.props.article.description}</p>
        </div>
        {this.state.showDetail ? <ArticleDetail article={this.props.article} /> : null}
      </div>
    )
  }
}

export default ArticleCard
