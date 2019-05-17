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

    // styles
    const users = {
      border: '1px solid black',
      borderRadius: "3px",
      boxShadow: "3px 3px 3px #ccc",
      width: '60%',
      margin: '16px auto'
    }

    return (
      <div style={users} >
          <h2>Users</h2>
            {this.state.users.map(u => {
                return (
                    <div style={users}>
                <li key={u.id}>{u.username}</li>
                <li key={u.id}>{u.password}</li>
                </div>
            )})}
      </div>
    )
  }
}

export default requiresAuth(Users)