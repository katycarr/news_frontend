import React from 'react'
import { connect } from 'react-redux'
import {archiveReading} from '../../actions/readings'

class ArchiveReading extends React.Component {

  handleClick = () => {
    this.props.archiveReading(this.props.reading.id)
  }

  render() {
    return(
      <button onClick={this.handleClick}>Archive</button>
    )
  }
}

export default connect(null, {archiveReading})(ArchiveReading)
