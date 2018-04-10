import React from 'react'
import { connect } from 'react-redux'
import SourceCheckbox from './SourceCheckbox'

class FilterContainer extends React.Component {



  render() {
    const options = this.props.allSources.map(source => {
      return <SourceCheckbox key={source} source={source} />
    })
    return(
      <div>
        {options}
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
