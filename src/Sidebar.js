import React from 'react'

import quill from './quill.svg'
import newIcon from './new.png'
import newHover from './new-hover.png'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      hovered: false,
    }
  }

  onMouse(){
      this.setState({hovered: true,})
  }

  offMouse(){
      this.setState({hovered: false,})
    }
  

  render()
  {
    return (
      <div
        className="Sidebar"
        style={styles.sidebar}
      >
        <div
          className="logo"
          style={styles.logo}
        >
          <img
            src={quill}
            alt="Noteherder"
            style={styles.logoImg}
          />
        </div>
  
        <a href="/notes" onMouseOver={this.onMouse.bind(this)} onMouseOut={this.offMouse.bind(this)}>
        {
          this.state.hovered ? 
          
          <img
          src={newHover}
          alt="New note"
          style={styles.buttonImg}
        /> : 
        
        <img
        src={newIcon}
        alt="New note"
        style={styles.buttonImg}
      />
        }
        {

        }
        </a>
  
        <div 
          className="SignOut"
        >
          <button style={styles.signOut}>
            <i className="fa fa-sign-out"></i>
          </button>
        </div>
      </div>
    )
  }
  }
 

const styles = {
  sidebar: {
    width: '6rem',
    backgroundColor: '#f3f3f3',
    padding: '0.5rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    fontFamily: '"Fauna One"',
    color: '#666',
    fontSize: '3rem',
  },
  logoImg: {
    width: '30px',
    paddingLeft: '4px',
  },

  buttonImg: {
    position: 'absolute',
    left: '0',
    width: '3%',
    marginLeft: '.7%',
    marginTop: '2%',
  },

  signOut: {
    position: 'absolute',
    bottom: '1rem',
    left: '1.5rem',
    color: '#008BF8',
    cursor: 'pointer',
    display: 'inline-block',
    font: 'normal normal normal 14px/1 FontAwesome',
    fontSize: '2rem',
    background: 'transparent',
    border: 'none',
  },
}




export default App