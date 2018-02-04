import React from 'react'
import request from 'superagent'
import Users from './Users'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
  }
  componentDidMount () {
    request
      .get('/api/v1/users')
      .then(res => {
        this.setState({
          users: res.body.users
        })
      })
  }
  render () {
    return (
      <div>
        <h1> This is working </h1>
        <Users users = {this.state.users} />
      </div>
    )
  }
}

export default App
