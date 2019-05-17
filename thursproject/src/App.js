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

  return (
    <div className="App">
      <header className="App-header">
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <button onClick={logout}>Log Out</button>
      </header>
      <Route path="/login" component={Login} />
      <Route path='/users' component={Users} />

    </div>
  );
}

export default withRouter(App);
