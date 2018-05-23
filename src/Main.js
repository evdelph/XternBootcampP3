import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      currentNote: {
        id: null,
        title: '',
        body: '',
      },
      notes: [
        {
          id: 1,
          title: 'SQL Resources',
          body: 'Here are resources to learn SQL.',
        },
        {
          id: 2,
          title: 'Python Resources',
          body: 'Here are resources to learn python',
        },
        {
          id: 3,
          title: 'Data analytics resources',
          body: 'Here are resources for data analytics',
        },
      ]
    }
  }

  setCurrentNote = (note) => {
    this.setState({ currentNote: note })
  }

  render() {
    return (
      <div className="Main" style={style}>
        <Sidebar />
        <NoteList
          notes={this.state.notes}
          setCurrentNote={this.setCurrentNote}
        />
        <NoteForm currentNote={this.state.currentNote} />
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