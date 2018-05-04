import React from 'react'
import { connect } from 'react-redux'
import FilteredArticles from '../Filtered'
import withArticles from '../../hocs/withArticles'
import withReadings from '../../hocs/withReadings'
import Loader from './Loader'
import './Container.css'


class ArticleFeedContainer extends React.Component {

  render() {
    if (this.props.loaded && this.props.articles.length >0) {
      return(
        <FilteredArticles />)
    } else if(!this.props.loaded) {
      return <Loader />
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

export default withReadings(withArticles(connect(mapStateToProps, {})(ArticleFeedContainer)))
