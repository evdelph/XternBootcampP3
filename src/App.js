import React, { Component } from 'react'

import {auth} from './base'
import './App.css'
import Main from './Main'
import SignIn from './Signin.js'



class App extends Component {
  state = {
    userID: null,
  }

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      if(user){
        this.handleAuth(user)
      } else {
        this.signOut()
      }
    })
  }

  handleAuth = (user) => {
    this.setState({userID: user.userID})
  }

  signedIn = () => {
    return this.state.userID
  }

  signOut = () => {
    console.log('signout')
    this.setState({userID: null})
    auth.signOut()
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
