import React from 'react'
import CollapsibleMenu from '../CollapsibleMenu'
import LengthOption from './LengthOption'


class FilterContainer extends React.Component {



  render() {
    const lengthOpts = ['long', 'short', 'both'].map(len => {
      return <LengthOption key={len} length={len} />
    })
    return(
      <CollapsibleMenu title='Length'>
        {lengthOpts}
      </CollapsibleMenu>
    )
  }
}



export default FilterContainer
