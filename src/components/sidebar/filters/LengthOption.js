import React from 'react'
import { connect } from 'react-redux'
import { filterByLength } from '../../../actions/filter'
import './LengthOption.css'

class LengthOption extends React.Component {

  handleClick = () => {
    this.props.filterByLength(this.props.length)
  }

  render() {
    let liClass = 'topic clickable';
    if (this.props.selected === this.props.length) {
      liClass+=' active'
    }
    return(
      <li className={liClass} onClick={this.handleClick}>{this.props.length}</li>
    )
  }
}

function mapStateToProps(state) {
  return {
    selected: state.filter.length
  }
}

export default connect(mapStateToProps, { filterByLength })(LengthOption)
