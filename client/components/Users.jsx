import React from 'react'

class Users extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        {this.props.users.map(user => {
          return (
            <p key={user.id}>
              {user.name}
            </p>
          )
        }
        )}
      </div>
    )
  }
}

export default Users
