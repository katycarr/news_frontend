import React from 'react'
import {fetchArticles} from '../../actions/articles'
import { connect } from 'react-redux'


function withArticles(WrappedComponent) {
  class ArticleComponent extends React.Component {

    componentDidMount = () => {
      this.props.fetchArticles()
    }

    render() {
      return(
        <WrappedComponent {...this.props} />
      )
    }
  }

  return connect(null, {fetchArticles})(ArticleComponent)
}

export default withArticles
