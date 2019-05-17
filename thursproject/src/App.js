import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, withRouter } from 'react-router-dom'
import Login from './components/Login'
import Users from './components/Users'

function App(props) {

  function logout() {
    localStorage.removeItem('token')
    props.history.push('/login')
  }
const link = {
  border: '1px solid #ccc',
  backgroundColor: 'white',
  textDecoration: 'none',
  color: "black",
  borderRadius: '3px'
} 

  return (
    <div className="App">
      <header className="App-header">
        <NavLink style={link} to='/login'>Login</NavLink>
        <NavLink style={link} to='/users'>Users</NavLink>
        <button onClick={logout}>Log Out</button>
      </header>
      <Route path="/login" component={Login} />
      <Route path='/users' component={Users} />

    </div>
  );
}

export default withRouter(App);
