import React from 'react'
import withAuth from '../hocs/withAuth'
import Page from '../Page'
import ArticleContainer from '../articles/ArticleContainer'


class HomeScreen extends React.Component {


  render() {
    return(
      <div className='home-container'>
        <Page withFilters={true}>
          <ArticleContainer />
        </Page>
      </div>
    )
  }
}

export default withAuth(HomeScreen)
