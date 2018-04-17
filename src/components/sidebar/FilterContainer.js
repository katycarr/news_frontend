import React from 'react'
import { connect } from 'react-redux'
import SourceCheckbox from './SourceCheckbox'
import CollabsibleMenu from './CollapsibleMenu'

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
        <CollabsibleMenu title='Sources'>
          {options}
        </CollabsibleMenu>
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
