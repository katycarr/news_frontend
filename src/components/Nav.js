import React from 'react'
import {Link} from 'react-router-dom'
import Logout from './buttons/Logout'
import './Nav.css'



const Nav = (props) => {
  return(
    <div className="nav">
      <div className='inner-nav'>
        <Link to="/">News</Link>
        <Link to="/topics">Explore Topics</Link>
        <Link to='/readinglist'>Saved Articles</Link>
        <Link to='/archive'>Archive</Link>
        <Logout />
      </div>
    </div>
  )
}

export default Nav
