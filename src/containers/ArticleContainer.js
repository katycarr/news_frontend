import React from 'react'
import { connect } from 'react-redux'
import {fetchArticles} from '../actions/articles'

class ArticleContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchArticles(this.props.user.id)
  }

  render() {
    const articles = this.props.articles.map(article => {
      return <li key={article.id}>{article.title}</li>
    })
    return(<div>{articles}</div>)
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.all,
    user: state.authentication.user
  }
}

export default connect(mapStateToProps, {fetchArticles})(ArticleContainer)
