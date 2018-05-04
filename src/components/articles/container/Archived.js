import React from 'react'
import { connect } from 'react-redux'
import ArticleGroup from '../Group'
import { compose } from 'redux'
import withReadings from '../../hocs/withReadings'
import Loader from './Loader'


class ArchivedArticlesContainer extends React.Component {
  render() {
    if (this.props.loaded && this.props.archive.length >0) {
      return(
        <ArticleGroup articles={this.props.archive}/>
      )
    } else if(!this.props.loaded) {
      return <Loader />
    } else {
      return (<div className='articles-container'><div>No archived stories!</div></div>)
    }
  }
}

function mapStateToProps(state) {
  return {
    archive: state.readings.archive,
    loaded: state.readings.loaded
  }
}

export default compose(connect(mapStateToProps), withReadings)(ArchivedArticlesContainer)
