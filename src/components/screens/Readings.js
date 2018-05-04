import React from 'react'
import Page from '../Page'
import withAuth from '../hocs/withAuth'
import CurrentArticlesContainer from '../articles/container/Current'


const ReadingsScreen = () => {
  return(
    <Page>
      <CurrentArticlesContainer />
    </Page>
  )
}



export default withAuth(ReadingsScreen)
