import React from 'react'
import { connect } from 'react-redux'
import ArticleGroup from '../articles/ArticleGroup'
import Page from '../Page'
import withAuth from '../../hocs/withAuth'


class ViewReadings extends React.Component {

  render() {
    if (this.props.loaded && this.props.readings.length > 0) {
      return(
        <Page>
          <ArticleGroup articles={this.props.readings}/>
        </Page>
      )
    } else if(!this.props.loaded) {
      return (<div className='articles-container'></div>)
    } else {
      return (<div className='articles-container'><div>No stories saved!</div></div>)
    }
  }
}

function mapStateToProps(state) {
  return {
    readings: state.readings.current,
    loaded: state.readings.loaded
  }
}

export default connect(mapStateToProps)(withAuth(ViewReadings))