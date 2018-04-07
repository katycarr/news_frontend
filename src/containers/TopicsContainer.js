import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class TopicsContainer extends React.Component {

  render() {
    const topics = this.props.topics.map(topic => {
      return <li key={topic.id}>{topic.name}</li>
    })
    return(
      <div className='topics-container'>
        {topics}
        <Link to='/topics'>Edit my topics</Link>
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
