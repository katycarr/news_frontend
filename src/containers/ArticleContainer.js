import React from 'react'
import { connect } from 'react-redux'
import {fetchArticles} from '../actions/articles'
import ArticleCard from '../components/ArticleCard'
import '../stylesheets/Loader.css'


class ArticleContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchArticles()
  }

  render() {
    let articles;
    if (this.props.articles.length > 0) {
      const filteredArticles = this.props.articles.filter(article => {
        return this.props.checkedSources.includes(article.source)
      })
      articles = filteredArticles.map(article => {
        return <ArticleCard key={article.id} article={article}/>
      })
      return(
        <div className='articles-container'>{articles ? articles : null}</div>)
    } else {
      return (<div className='articles-container'><div className="loader"></div></div>)
    }
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.all,
    user: state.authentication.user,
    checkedSources: state.sources.checked
  }
}

export default connect(mapStateToProps, {fetchArticles})(ArticleContainer)
