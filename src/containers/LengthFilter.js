import React from 'react'
import { connect } from 'react-redux'
import { filterByLength } from '../actions/filter'

class FilterContainer extends React.Component {

  handleChange = e => {
    this.props.filterByLength(e.target.value)
  }

  render() {
    return(
      <div className='length-filter'>
        <p>Filter by length</p>
        <select name='time' value={this.props.length} onChange={this.handleChange}>
          <option value='long'>Long</option>
          <option value='short'>Short</option>
          <option value='both'>Both</option>
        </select>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    length: state.filter.length
  }
}

export default connect(mapStateToProps, {filterByLength})(FilterContainer)
