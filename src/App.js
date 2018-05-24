import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignIn from './Signin.js'


class App extends Component {
  state = {
    userID: null,
  }

  handleAuth = () => {
    this.setState({userID: 'evdelph'})
  }

  signedIn = () => {
    return this.state.userID
  }

  signOut = () => {
    console.log('signout')
    this.setState({userID: null})
  }

  render() {
    return (
      <div className="App">
      {
        this.signedIn()
        ? <Main signOut={this.signOut}/> 
        : <SignIn handleAuth={this.handleAuth} />
      }
      </div>
    )
  }
}

export default App
