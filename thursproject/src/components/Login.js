import React, { Component } from 'react'
import axios from 'axios'

export default class requiresAuth extends Component {
constructor(props) {
  super(props)

  this.state = {
     username: '',
     password: ''
  }
}

    handleChange = e => {
        const { id, value } = e.target;
        this.setState({
            [id]: value
        })
    }

    submitLogin = e => {
        e.preventDefault()

        const endpoint = `http://localhost:54321/api/auth/login`
        axios.post(endpoint, this.state)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                this.props.history.push('/users')
            })
    }


  render() {
    return (
      <div>
          <h1>Login Page</h1>
        <form>
            <input 
                type="text"
                id="username"
                onChange={this.handleChange}
                value={this.state.username}
            />
            <input 
                type="password"
                id="password"
                onChange={this.handleChange}
                value={this.state.password}
            />
            <button onClick={this.submitLogin}>Log In</button>
        </form>
      </div>
    )
  }
}
