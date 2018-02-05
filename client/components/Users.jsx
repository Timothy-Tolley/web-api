import React from 'react'
import {Link} from 'react-router-dom'

class Users extends React.Component {
  render () {
    return (
      <div>
        {this.props.users.map(user => {
          return (
            <Link to={`/users/${user.id}`} key={user.id}>
              <p >
                {user.name}
              </p>
            </ Link>
          )
        }
        )}
      </div>
    )
  }
}

export default Users
