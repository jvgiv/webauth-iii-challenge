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

    //Styles
    const loginCard = {
      border: '1px solid black',
      borderRadius: "3px",
      boxShadow: "3px 3px 3px #ccc",
      width: '40%',
      margin: '16px auto'
    }

    const form = {
      display: "flex",
      flexDirection: 'column',
      width: "50%",
      padding: '10px',
      margin: "10px auto"
    }

    const input = {
      textAlign: 'center',
      margin: '2px'
    }

    return (
      <div style={loginCard}>
          <h1>Login</h1>
        <form style={form} >
            <input 
                style={input}
                type="text"
                id="username"
                placeholder="Username"
                onChange={this.handleChange}
                value={this.state.username}
            />
            <input 
                style={input}
                type="password"
                id="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
            />
            <button onClick={this.submitLogin}>Log In</button>
        </form>
      </div>
    )
  }
}
