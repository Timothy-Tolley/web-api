import React from 'react'
import request from 'superagent'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import Users from './Users'
import User from './User'
import AddUser from './AddUser'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: []
    }
    this.refresh = this.refresh.bind(this)
  }
  componentDidMount () {
    this.refresh()
  }

  refresh () {
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
      <Router>
        <div>

          <h1> Web Apis </h1>
          <Route exact path='/' render = {() => {
            return (
              <Users users={this.state.users}/>
            )
          }}/>
          <Switch>
            <Route exact path='/users/add' render = {() => {
              return (
                <AddUser refresh={this.refresh} />
              )
            }} />
            <Route exact path='/users/:id' component ={User}/>
          </Switch>
        </div>
      </ Router>
    )
  }
}

export default App
