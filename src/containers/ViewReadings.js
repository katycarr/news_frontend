import React from 'react'
import { connect } from 'react-redux'
import { getReadings } from '../actions/readings'
import Nav from './Nav'
import TopicsContainer from './TopicsContainer'
import ArticleGroup from '../components/ArticleGroup'

class ViewReadings extends React.Component {

  componentDidMount = () => {
    this.props.getReadings()
  }

  render() {
    const articles = this.props.readings.map(reading => reading.article)
    return(
      <div>
        <Nav />
        <TopicsContainer />
        {this.props.loaded ? <ArticleGroup articles={articles} /> : null}
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

export default connect(mapStateToProps, {getReadings})(ViewReadings)
