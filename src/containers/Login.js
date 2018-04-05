import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/user'

class Login extends React.Component {
  state = {
    username:'',
    password:''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser(this.state)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' value={this.state.username} onChange={this.handleChange}/>
        <input type='password' name='password' value={this.state.password} onChange={this.handleChange}/>
        <input type='submit' name='submit'/>
      </form>
    )
  }
}

export default connect(null, {loginUser})(Login)
