import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { logout } from '../actions/user'


class Nav extends React.Component {

  logout = () => {
    localStorage.removeItem('token')
    this.props.logout()
  }

  render() {
    return(
      <div className="nav">
        <Link to="/">My News</Link>
        <Link to="/topics">My Topics</Link>
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default connect(null, {logout})(Nav)
