import React from 'react'
import LengthFilter from './LengthFilter'
import FilterContainer from './FilterContainer'
import '../../stylesheets/FilterGroup.css'

const FilterGroup = (props) => {

  return(
    <div className='filter-group'>
      <h1>Filter Stories</h1>
      <LengthFilter />
      <FilterContainer />
    </div>
  )
}

export default FilterGroup
