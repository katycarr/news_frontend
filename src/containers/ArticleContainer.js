import React from 'react'
import { connect } from 'react-redux'
import {fetchArticles} from '../actions/articles'
import ArticleList from './ArticleList'
import '../stylesheets/Loader.css'


class ArticleContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchArticles()
  }


  render() {
    if (this.props.articles.length > 0) {
      return(
        <div className='articles-container'><ArticleList /></div>)
    } else {
      return (<div className='articles-container'><div className="loader"></div></div>)
    }
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.all,
    user: state.authentication.user,
    checkedSources: state.sources.checked,
    readtime: state.filter.length
  }
}

export default connect(mapStateToProps, {fetchArticles})(ArticleContainer)
