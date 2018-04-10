import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import FilterContainer from './FilterContainer'
import LengthFilter from './LengthFilter'
import '../stylesheets/Topics.css'

class TopicsContainer extends React.Component {

  render() {
    const topics = this.props.topics.map(topic => {
      return <li class='topic' key={topic.id}>{topic.name}</li>
    })
    return(
      <div className='topics-container'>
        <h1>My Topics</h1>
        <div className='link'>( <Link to='/topics'>edit</Link> )</div>
        <div className='topic-list'>
          {topics}
        </div>
        <h1>Filter Stories</h1>
        <LengthFilter />
        <FilterContainer />
      </div>)
  }
}

function mapStateToProps(state) {
  return {
    topics: state.topics.all,
    user: state.authentication.user
  }
}

export default connect(mapStateToProps)(TopicsContainer)
