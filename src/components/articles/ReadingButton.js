import React from 'react'
import {connect} from 'react-redux'
import AddToReading from '../buttons/AddToReading'
import ArchiveReading from '../buttons/ArchiveReading'
import './ReadingButton.css'


class ReadingButton extends React.Component {
  whichButton = () => {
    if (!this.props.reading && !this.props.archive) {
      return <AddToReading article={this.props.article} />
    } else if (this.props.archive) {
      return <button className='read'>x</button>
    } else {
      return <ArchiveReading reading={this.props.reading} />
    }
  }
  render() {
    const readingButton = this.whichButton()
    return (
      <div className='reading-button'>{readingButton}</div>
    )
  }
}

function mapStateToProps(state, ownProps) {
    return {
      reading: state.readings.current.find(article => article.id === ownProps.article.id),
      archive: state.readings.archive.find(article => article.id === ownProps.article.id)
    }

}

export default connect(mapStateToProps)(ReadingButton)
