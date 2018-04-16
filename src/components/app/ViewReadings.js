import React from 'react'
import { connect } from 'react-redux'
import ArticleGroup from '../articles/ArticleGroup'
import Page from '../Page'
import withAuth from '../../hocs/withAuth'


class ViewReadings extends React.Component {

  render() {
    let pageContent = <div className='articles-container'><div>No stories saved!</div></div>
    if (this.props.loaded && this.props.readings.length > 0) {
      pageContent = <ArticleGroup articles={this.props.readings}/>
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
    readings: state.readings.current,
    loaded: state.readings.loaded
  }
}

export default connect(mapStateToProps)(withAuth(ViewReadings))
