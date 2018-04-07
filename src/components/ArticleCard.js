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
    console.log(this.props.article)
    return(
      <div className='article'>
        <a href={this.props.article.url}><h3>{this.props.article.title}</h3></a>
        <h5>{this.props.article.author} - {this.props.article.source}</h5>
        <button onClick={this.handleClick}>Toggle Detail</button>
        <p>{this.props.article.description}</p>
        {this.state.showDetail ? <ArticleDetail article={this.props.article} /> : null}
      </div>
    )
  }
}

export default ArticleCard
