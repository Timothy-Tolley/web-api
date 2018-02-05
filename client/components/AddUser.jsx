import React from 'react'
import request from 'superagent'

class AddUser extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    request
      .post('/api/v1/users')
      .set('Content-Type', 'application/json')
      .send({user: {
        name: this.state.name,
        email: this.state.email
      }})
      .then(() => {
        this.props.refresh()
      })
  }

  render () {
    return (
      <div>
        <h2>
          Add New User
        </h2>
        <form>
          <label>
            Insert Name:
            <input name = "name" onChange={this.handleChange}/>
          </label>
          <label>
            Insert email:
            <input name = "email" onChange={this.handleChange}/>
          </label>
          <button type='button' onClick={this.handleClick}> Submit </button>
        </form>

      </div>
    )
  }
}

export default AddUser
