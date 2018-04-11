import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import '../stylesheets/Topics.css'
import UserTopicsList from '../components/UserTopicsList'


class TopicsContainer extends React.Component {

  render() {
    return(

      <div className='topics-container sidebar'>
        <UserTopicsList topics={this.props.topics}>
          <div className='link'>( <Link to='/topics'>edit</Link> )</div>
        </UserTopicsList>
        {this.props.children}
      </div>)
  }
}

function mapStateToProps(state) {
  return {
    topics: state.topics.all
  }
}

export default connect(mapStateToProps)(TopicsContainer)
