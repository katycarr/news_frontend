import React from 'react'
import { withRouter } from 'react-router-dom'
import './Form.css'


class UsersForm extends React.Component {

  state = {}

  handleSubmit = e => {
    e.preventDefault()
    this.props.formAction(this.state, this.props.history)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const inputs = this.props.inputs.map(field => {
      return <input key={field.name} placeholder={field.name+'...'} type={field.type} name={field.name} value={this.state[field.name] || ''} onChange={this.handleChange} />
    })

    return(
      <div className='login-container'>
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleSubmit}>
          {inputs}
          <input type='submit' name='submit'/>
        </form>
        {this.props.children}
      </div>
    )
  }
}

export default withRouter(UsersForm)
