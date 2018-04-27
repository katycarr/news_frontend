import React from 'react'
import {getReadings} from '../../actions/readings'
import { connect } from 'react-redux'


function withReadings(WrappedComponent) {
  class ReadingComponent extends React.Component {

    componentDidMount = () => {
      if (this.props.readings.length === 0 && this.props.loaded) {
        this.props.getReadings()
      }
    }

    render() {
      return(
        <WrappedComponent {...this.props} />
      )
    }
  }

  function mapStateToProps(state) {
    return {
      readings: state.readings.current,
      loaded: state.readings.loaded
    }
  }

  return connect(mapStateToProps, {getReadings})(ReadingComponent)
}

export default withReadings
