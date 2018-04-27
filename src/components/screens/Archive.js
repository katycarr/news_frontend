import React from 'react'
import { connect } from 'react-redux'
import ArticleGroup from '../articles/ArticleGroup'
import Page from '../Page'
import withAuth from '../hocs/withAuth'
import { compose } from 'redux'
import withReadings from '../hocs/withReadings'



class ArchiveScreen extends React.Component {

  render() {
    let pageContent = <div className='articles-container'><div>No stories saved!</div></div>
    if (this.props.loaded && this.props.archive.length > 0) {
      pageContent = <ArticleGroup articles={this.props.archive}/>
    } else if(!this.props.loaded) {
      pageContent = <div className='articles-container'></div>
    }
    return(
      <Page>
        {pageContent}
      </Page>
    )
  }
}

function mapStateToProps(state) {
  return {
    archive: state.readings.archive,
    loaded: state.readings.loaded
  }
}

export default compose(withAuth,connect(mapStateToProps), withReadings)(ArchiveScreen)
