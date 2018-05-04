import React from 'react'
import Page from '../Page'
import withAuth from '../hocs/withAuth'
import ArchivedArticlesContainer from '../articles/container/Archived'



const ArchiveScreen = () => {
  return(
    <Page>
      <ArchivedArticlesContainer />
    </Page>
  )
}


export default withAuth(ArchiveScreen)
