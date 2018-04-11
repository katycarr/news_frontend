import React from 'react'
import { connect } from 'react-redux'
import ArticleGroup from '../components/ArticleGroup'

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

    return(
        <ArticleGroup articles={filteredArticles} />
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
