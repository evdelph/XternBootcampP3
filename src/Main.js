import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'
//import base from './rebase';

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      currentNote: this.blankNote(),
      notes: [],
    }

    window.addEventListener("beforeunload", this.componentWillUpdate)
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  componentWillUpdate = () => {
    localStorage.setItem('state',JSON.stringify(this.state))
}

  componentWillMount = () => {
      const noteItem = window.localStorage.getItem('state')
      try {this.setState(JSON.parse(noteItem))} 
      catch (e) {this.setState({
        currentNote: this.blankNote(),
        notes: [],
      })}
    }


  mountData(){
      this.componentWillMount()
  }

  updateData(){
      this.componentWillUpdate()
  }


  setCurrentNote = (note) => {
    this.setState({ currentNote: note })    
  }

  resetCurrentNote = () => {
    this.setCurrentNote(this.blankNote())
  }

  saveNote = (note) => {
    const notes = [...this.state.notes]

    if (!note.id) {
      note.id = Date.now()
      notes.unshift(note)
    } else {
      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      notes[i] = note
    }

    this.setState({ notes })
    this.setCurrentNote(note)
  }
  
  deleteNote = (note) => {
      let notes = [...this.state.notes]
      
      // delete from array
      const indexSelectedItem = notes.indexOf(note)
      notes.splice(indexSelectedItem,1)
      this.setState({notes})
     
      // delete from list and form
      this.setCurrentNote(this.blankNote())
  }

  render() {
    return (
      <div className="Main" style={style}>
        <Sidebar resetCurrentNote={this.resetCurrentNote} />
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
        />
        <NoteForm
          currentNote={this.state.currentNote}
          saveNote={this.saveNote}
          deleteNote={this.deleteNote}
        />
      </div>
    )
  }
}

const style = {
  display: 'flex',
  height: '100vh',
  alignItems: 'stretch',
}

export default Main