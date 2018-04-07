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
    return(
      <div className='article'>
        <h3><a href={this.props.article.url}>{this.props.article.title}</a></h3>
        <h5>{this.props.article.author} - {this.props.article.source}</h5>
        <button onClick={this.handleClick}>Toggle Detail</button>
        <p>{this.props.article.description}</p>
        {this.state.showDetail ? <ArticleDetail article={this.props.article} /> : null}
      </div>
    )
  }
}

export default ArticleCard
