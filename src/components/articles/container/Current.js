import React from 'react'
import { connect } from 'react-redux'
import ArticleGroup from '../Group'
import withReadings from '../../hocs/withReadings'
import { compose } from 'redux'
import Loader from './Loader'


class CurrentArticlesContainer extends React.Component {
  render() {
    if (this.props.loaded && this.props.readings.length >0) {
      return(
        <ArticleGroup articles={this.props.readings}/>
      )
    } else if(!this.props.loaded) {
      return <Loader />
    } else {
      return (<div className='articles-container'><div>No saved stories!</div></div>)
    }
  }
}

function mapStateToProps(state) {
  return {
    readings: state.readings.current,
    loaded: state.readings.loaded
  }
}

export default compose(withReadings, connect(mapStateToProps))(CurrentArticlesContainer)
