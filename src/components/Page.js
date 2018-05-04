import React from 'react'
import Nav from './Nav'
import Sidebar from './sidebar/Sidebar'
import GetNew from './buttons/GetNew'
import withTopics from './hocs/withTopics'

const Page = (props) => {
  return(

    <div className='page'>
      <Nav />
      <Sidebar withFilters={!!props.withFilters}>
        <GetNew />
      </Sidebar>
      {props.children}
    </div>
  )
}

export default withTopics(Page)
