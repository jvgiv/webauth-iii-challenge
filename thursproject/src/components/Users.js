import React, { Component } from 'react'
import axios from 'axios'
import requiresAuth from './auth/requiresAuth'

class Users extends Component {
constructor(props) {
  super(props)

  this.state = {
     users: []
  }
}

componentDidMount() {
  const endpoint = 'http://localhost:54321/api/users'
  const token = localStorage.getItem('token')
  const requestConfig = {
      headers: {
          authorization: token
      }
  }

  axios.get(endpoint, requestConfig)
    .then(res => {
        this.setState({
            users: res.data
        })
        this.props.history.push('/users')
    })
    .catch(err => {
        console.log(err)
    })
}


  render() {
    return (
      <div>
          <h2>Users</h2>
            {this.state.users.map(u => {
                return (
                    <>
                <li key={u.id}>{u.username}</li>
                <li key={u.id}>{u.password}</li>
                </>
            )})}
      </div>
    )
  }
}

export default requiresAuth(Users)