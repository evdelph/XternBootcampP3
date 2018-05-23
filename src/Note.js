import React from 'react'

const Note  = (props) => {
    return(
        <li>
            <div className="note">
                <div className="note-title">
                    {props.noteList.title}
                </div>
                <div className="note-body">
                    <p>
                        {props.noteList.body}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Note