import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/user'
import UsersForm from '../users/Form.js'
import {Link} from 'react-router-dom'

class LoginScreen extends React.Component {


  render() {
    const inputs = [{
      name: 'username',
      type: 'text'
    },
    {
      name: 'password',
      type: 'password'
    }]
    return(
      <UsersForm title='Login' formAction={this.props.loginUser} inputs={inputs}>
        <div className='link'>( <Link to='/signup'>signup</Link> )</div>
      </UsersForm>
    )
  }
}

export default connect(null, {loginUser})(LoginScreen)
