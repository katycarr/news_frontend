import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../actions/user'
import { Link } from 'react-router-dom'
import UsersForm from '../users/Form'

class SignupScreen extends React.Component {

  render() {
    const inputs = [{
      name: 'username',
      type: 'text'
    },
    {
      name: 'password',
      type: 'password'
    },
    {
      name: 'password confirmation',
      type: 'password'
    }]

    return(
      <UsersForm title='Signup' formAction={this.props.createUser} inputs={inputs}>
        <div className='link'>( <Link to='/login'>login</Link> )</div>
      </UsersForm>
    )
  }
}

export default connect(null, {createUser})(SignupScreen)
