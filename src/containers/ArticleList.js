import React from 'react'
import { connect } from 'react-redux'
import ArticleCard from '../components/ArticleCard'

class ArticleList extends React.Component {

  filterByTime = (articles) => {
    function toNum(string) {
      return parseInt(string.split(' ')[0])
    }
    switch (this.props.readtime) {
      case 'long':
        return articles.filter(article => toNum(article.reading_time) > 5 )
      case 'short':
        return articles.filter(article => toNum(article.reading_time) <= 5 )
      default:
        return articles
    }
  }

  filterBySources = (articles) => {
    const filteredArticles = articles.filter(article => {
      return this.props.checkedSources.includes(article.source)
    })
    return filteredArticles
  }

  render() {
    const filteredArticles = this.filterBySources(this.filterByTime(this.props.articles))
    const articleCards = filteredArticles.map(article => {
      return <ArticleCard key={article.id} article={article}/>
    })
    return(
      <div>
        {articleCards}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.all,
    checkedSources: state.sources.checked,
    readtime: state.filter.length
  }
}

export default connect(mapStateToProps)(ArticleList)
