import React from 'react'
import Nav from './Nav'
import Sidebar from './sidebar/Sidebar'
import FilterGroup from './sidebar/FilterGroup'
import GetNew from './buttons/GetNew'

const Page = (props) => {
  return(
    <div className='page'>
      <Nav />
      <Sidebar>
        {props.withFilters ? <FilterGroup /> : null}
        <GetNew />
      </Sidebar>
      {props.children}
    </div>
  )
}

export default Page
