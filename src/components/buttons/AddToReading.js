import React from 'react'
import { connect } from 'react-redux'
import { createReading } from '../../actions/readings'


class AddToReading extends React.Component {

  handleClick = () => {
    this.props.createReading(this.props.article.id)
  }

  render() {
    return (
      <button className='add' data-tip='add to reading list' onClick={this.handleClick}>+</button>
    )
  }
}

export default connect(null, {createReading})(AddToReading)
