import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/user'

class Logout extends React.Component {

  logout = () => {
    localStorage.removeItem('token')
    this.props.logout()
  }

  render() {
    return(
      <button onClick={this.logout}>Logout</button>
    )
  }
}

export default connect(null, {logout})(Logout)
