import React from 'react'
import { connect } from 'react-redux'
import ArticleGroup from '../articles/ArticleGroup'
import Page from '../Page'

class ViewReadings extends React.Component {

  render() {
    const articles = this.props.readings.map(reading => reading.article)
    return(
      <div>
        <Page>
          {this.props.loaded ? <ArticleGroup articles={articles} /> : null}
        </Page>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    readings: state.readings.all,
    loaded: state.readings.loaded,
  }
}

export default connect(mapStateToProps)(ViewReadings)
