import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import './Sidebar.css'
import UserTopicsList from './UserTopicsList'
import FilterGroup from './filters/FilterGroup'


class Sidebar extends React.Component {

  render() {
    return(
      <div className='sidebar'>
        <h1 className='main'>FrontPage</h1>
        <UserTopicsList topics={this.props.topics}>
          <div className='link'>( <Link to='/topics'>edit</Link> )</div>
        </UserTopicsList>
        {this.props.withFilters ? <FilterGroup /> : null}
        {this.props.children}
      </div>)
  }
}

function mapStateToProps(state) {
  return {
    topics: state.topics.all
  }
}

export default connect(mapStateToProps)(Sidebar)
