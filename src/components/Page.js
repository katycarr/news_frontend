import React from 'react'
import Nav from '../containers/Nav'
import TopicsContainer from '../containers/TopicsContainer'
import FilterGroup from '../components/FilterGroup'

const Page = (props) => {
  return(
    <div>
      <Nav />
      <TopicsContainer>
        {props.withFilters ? <FilterGroup /> : null}
      </TopicsContainer>
      {props.children}
    </div>
  )
}

export default Page
