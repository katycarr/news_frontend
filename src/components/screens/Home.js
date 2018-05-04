import React from 'react'
import withAuth from '../hocs/withAuth'
import Page from '../Page'
import ArticleFeedContainer from '../articles/container/Feed'


const HomeScreen = () => {

  return(
    <div className='home-container'>
      <Page withFilters={true}>
        <ArticleFeedContainer />
      </Page>
    </div>
  )
}

export default withAuth(HomeScreen)
