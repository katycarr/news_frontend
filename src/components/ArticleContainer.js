import React from 'react'
import { connect } from 'react-redux'
import ArticleList from './ArticleList'
import '../stylesheets/Loader.css'


class ArticleContainer extends React.Component {

  render() {
    if (this.props.loaded && this.props.articles.length >0) {
      return(
        <ArticleList />)
    } else if(!this.props.loaded) {
      return (<div className='articles-container'><div className="loader"></div></div>)
    } else {
      return (<div className='articles-container'><div>No stories yet!</div></div>)
    }
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles.all,
    loaded: state.articles.loaded
  }
}

export default connect(mapStateToProps, {})(ArticleContainer)
