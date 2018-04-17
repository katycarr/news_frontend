import React from 'react'
import { connect } from 'react-redux'
import CollapsibleMenu from './CollapsibleMenu'
import LengthOption from './LengthOption'


class FilterContainer extends React.Component {



  render() {
    const lengthOpts = ['long', 'short', 'both'].map(len => {
      return <LengthOption key={len} length={len} />
    })
    return(
      <div className='length-filter'>
        <CollapsibleMenu title='Length'>
          {lengthOpts}
        </CollapsibleMenu>


      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    length: state.filter.length
  }
}

export default connect(mapStateToProps)(FilterContainer)
