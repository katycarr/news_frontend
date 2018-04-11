import React from 'react'
import LengthFilter from '../containers/LengthFilter'
import FilterContainer from '../containers/FilterContainer'

const FilterGroup = (props) => {

  return(
    <div>
      <h1>Filter Stories</h1>
      <LengthFilter />
      <FilterContainer />
    </div>
  )
}

export default FilterGroup
