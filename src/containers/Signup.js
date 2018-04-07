import React from 'react'
import { connect } from 'react-redux'
import { createUser } from '../actions/user'
import { withRouter } from 'react-router-dom'

class Signup extends React.Component {
  state = {
    username:'',
    password:'',
    password_confirmation:''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createUser(this.state, this.props.history)
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
        <input type='password' name='password_confirmation' value={this.state.password_confirmation} onChange={this.handleChange}/>
        <input type='submit' name='submit'/>
      </form>
    )
  }
}

export default withRouter(connect(null, {createUser})(Signup))
