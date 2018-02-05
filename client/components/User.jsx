import React from 'react'
import request from 'superagent'

class User extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount () {
    request
      .get(`/api/v1/users/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          user: res.body
        })
      })
  }

  render () {
    return (
      <div>
        <p>  id: {this.state.user.id} </p>
        <p>  email: {this.state.user.email} </p>
        <p>  name: {this.state.user.name} </p>
      </div>
    )
  }
}

export default User
