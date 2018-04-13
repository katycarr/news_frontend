import React from 'react'
import { connect } from 'react-redux'
import SourceCheckbox from './SourceCheckbox'

class FilterContainer extends React.Component {
  state = {
    visible: false
  }

  toggleVisibility = () => {
    this.setState({
      visible: !this.state.visible
    })
  }


  render() {
    const options = this.props.allSources.map(source => {
      return <SourceCheckbox key={source} source={source} />
    })
    return(
      <div className='source-filter'>
        <p>Filter by source</p>
        ( <a className='toggle-source' onClick={this.toggleVisibility}>{this.state.visible ? 'Hide List' : 'Show List'}</a> )

          {this.state.visible ? <div className='source-box'>{options}</div> : null}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    allSources: state.sources.all
  }
}

export default connect(mapStateToProps)(FilterContainer)
