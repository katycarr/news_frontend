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
      <div>
        <button onClick={this.toggleVisibility}>Show/hide</button>
          {this.state.visible ? options : null}
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
