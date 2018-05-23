import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
    const notes = [
    {
        id: 1,
        title: "Data analytics resources",
        body: "Here are resources for teaching yourself data analytics",
    },
    {
        id: 2,
        title: "Python",
        body: "Here are resources for teaching yourself python",
    },
    {
        id: 3,
        title: "SQL",
        body: "Here are resources for teaching yourself SQL",
    },
    ]
  return (
    <div className="NoteList">
          <h3>Notes</h3>
          <ul id="notes">
            <a className="active">
                {notes.map(note => <Note key={note.id} noteList={note}/>)}
            </a>
          </ul>
        </div>
  )
}

export default NoteList