import React from 'react'
import Page from '../Page'
import withAuth from '../hocs/withAuth'
import SearchContainer from '../topics/SearchContainer'
import PopularTopics from '../topics/Popular'


const FindTopicsScreen = props => {
  return(
    <Page>
      <PopularTopics />
      <SearchContainer />
    </Page>
  )
}



export default withAuth(FindTopicsScreen)
