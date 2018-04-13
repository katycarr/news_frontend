import React from 'react'
import {Link} from 'react-router-dom'
import Logout from './buttons/Logout'

const Nav = (props) => {
  return(
    <div className="nav">
      <Link to="/">News</Link>
      <Link to="/topics">My Topics</Link>
      <Link to='/readinglist'>Saved Articles</Link>
      <Link to='/archive'>Archive</Link>
      <Logout />
    </div>
  )
}

export default Nav
