import React from 'react'
import {Link} from 'react-router-dom'
import Logout from './buttons/Logout'
import GetNew from './buttons/GetNew'

const Nav = (props) => {
  return(
    <div className="nav">
      <GetNew />
      <Link to="/">News</Link>
      <Link to="/topics">My Topics</Link>
      <Link to='/readinglist'>Saved Articles</Link>
      <Link to='/archive'>Archive</Link>
      <Logout />
    </div>
  )
}

export default Nav
