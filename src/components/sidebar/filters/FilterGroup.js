import React from 'react'
import LengthFilter from './LengthFilter'
import FilterContainer from './FilterContainer'
import './FilterGroup.css'

const FilterGroup = (props) => {

  return(
    <div className='filter-group'>
      <LengthFilter />
      <FilterContainer />
    </div>
  )
}

export default FilterGroup
