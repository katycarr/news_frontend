import React from 'react'
import Nav from '../containers/Nav'
import Sidebar from './sidebar/Sidebar'
import FilterGroup from './sidebar/FilterGroup'

const Page = (props) => {
  return(
    <div>
      <Nav />
      <Sidebar>
        {props.withFilters ? <FilterGroup /> : null}
      </Sidebar>
      {props.children}
    </div>
  )
}

export default Page
