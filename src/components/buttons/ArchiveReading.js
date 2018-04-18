import React from 'react'
import { connect } from 'react-redux'
import {archiveReading} from '../../actions/readings'

class ArchiveReading extends React.Component {

  handleClick = () => {
    this.props.archiveReading(this.props.reading.id)
  }

  render() {
    return(
      <button data-tip='archive' className='archive' onClick={this.handleClick}>-</button>
    )
  }
}

export default connect(null, {archiveReading})(ArchiveReading)
