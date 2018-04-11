import React from 'react'
import { connect } from 'react-redux'
import { getReadings } from '../actions/readings'
import Nav from './Nav'
import UserTopicsList from '../components/UserTopicsList'
import ArticleCard from '../components/ArticleCard'

class ViewReadings extends React.Component {

  componentDidMount = () => {
    this.props.getReadings()
  }

  render() {
    console.log(this.props)
    const readings = this.props.readings.map(reading => {
      return <ArticleCard key={reading.id} article={reading.article} />
    })
    return(
      <div>
        <Nav />
        <UserTopicsList topics={this.props.topics} />
        <div className='articles-container'>
          <div className='article-list'>
            {readings}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    readings: state.readings.all,
    loaded: state.readings.loaded,
    topics: state.topics.all
  }
}

export default connect(mapStateToProps, {getReadings})(ViewReadings)
