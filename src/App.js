import React, { Component } from 'react'

import './App.css'
import { auth } from './base'
import Main from './Main'
import SignIn from './Signin'

class App extends Component {
  state = {
    uid: null,
    data: null,
  }


  getArray(){
    console.log([...this.state.uid])
    return [...this.state.uid]
  }

  

  componentWillMount(){
    this.setState({uid: JSON.parse(window.localStorage.getItem('uids'))})
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.handleAuth(user)
      } else {
        this.signOut()
      }
    })
  }

  handleAuth = (user) => {
    this.setState({ uid: user.uid })
    window.localStorage.setItem('uids', JSON.stringify(this.state.uid))
    this.getArray()
  }

  signedIn = () => {
    return this.state.uid
  }

  signOut = () => {
    this.setState({ uid: null })
    window.localStorage.setItem('uids', JSON.stringify(this.state.uid))
    auth.signOut()
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn()
            ? <Main signOut={this.signOut} />
            : <SignIn handleAuth={this.handleAuth} />
        }
      </div>
    )
  }
}

export default App