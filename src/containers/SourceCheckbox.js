import React from 'react'
import { connect } from 'react-redux'
import { toggleCheck } from '../actions/sources'

class SourceCheckbox extends React.Component {

  isChecked = () => {
    return this.props.checked.includes(this.props.source)
  }

  toggleChecked = () => {
    this.props.toggleCheck(this.props.source, this.props.isChecked)
  }

  render() {
    return (
      <li className='topic'>
        {this.props.source}
        <input
          type='checkbox'
          value={this.props.source}
          checked={this.props.isChecked}
          onChange={this.toggleChecked}
        />
    </li>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isChecked: state.sources.checked.includes(ownProps.source)
  }
}

export default connect(mapStateToProps, {toggleCheck})(SourceCheckbox)
