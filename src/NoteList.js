import React from 'react'
import Sidebar from './Sidebar'

class App1 extends React.Component{
    constructor(){
        super()
        this.state = {
        notes: [
            {
                active: true,
                noteTitle: "Note 1",
                noteBody: "This is my first note",
                hovered: false},
            {
                active: true,
                noteTitle: "Note 2",
                noteBody: "This is my second note",
                hovered: false},
            {
                active: true,
                noteTitle: "Note 3",
                noteBody: "This is my third note",
                hovered: false}
           ]
        }
    }
    onMouse(){
        this.setState({hovered: true,})
        console.log('Mouse on')
    }
  
    offMouse(){
        this.setState({hovered: false,})
        console.log('mouse off')
      }

    render(){
    return(
        <div className="NoteList" style={styles.div}>
          <h3 style={styles.h3}>Notes</h3>
          <ul id="notes" style={styles.ul}>
          {this.state.notes.map(notes => 
                    <a className="active">
                        {notes.active}
                    <li onMouseOver={this.onMouse.bind(this)} onMouseOut={this.offMouse.bind(this)} style={styles.li}>                    
                    <div className="note" >
                    <div className="note-title" style={styles.title}>
                        {notes.noteTitle}
                    </div>
                    <div className="note-body" style={styles.body}>
                        <p>
                            {notes.noteBody}
                        </p>
                    </div>
                    </div>
                    </li>
                    </a>)}
          </ul>
        </div>           
    )
  }

 
}

const styles = {
    h3: {
        color: "#999",
        textTransform: "uppercase",
        fontSize: "2rem",
        fontFamily: "Oxygen",
        fontWeight: "300",
        letterSpacing: "3px",
        margin: "20px 2rem",
        width: '20rem',
        boxSizing: "border-box",
        display: "block",
    },
    ul :
    {
        borderTop: "1px solid #eee",
        overflowY: "scroll",
        height: "calc(100vh - 72px)",
        listStyle: "none",
        marginTop: "1em",
        padding: "0",
        width: "100%",
        color: "#999",
    },

    li :
    {
        fontSize: "1em!important",
        padding: "0!important",
        color: "#999!important",
        background: "none",
        border: "none",
        
        
    },

    titleHovered : 
    {
        padding: "0!important",
        color: "white",
        background: "cornflowerblue",
        border: "none",
        fontFamily: "Fauna One",
        fontSize: "120%",
        fontWeight: "400",
        whiteSpace: "nowrap",
        overflowX: "hidden",
        oTextOverflow: "ellipsis",
        textOverflow: "ellipsis",
        marginLeft:"10%",
        marginTop:"7%",
    },

    bodyHovered:
    {

    },

    div: 
    {
    borderLeft: "1px solid #eee",
    borderRight: "1px solid #eee",
    width: "30rem",
    },

    title:
    {
        color: "#4a4a4a",
        fontFamily: "Fauna One",
        fontSize: "120%",
        fontWeight: "400",
        whiteSpace: "nowrap",
        overflowX: "hidden",
        oTextOverflow: "ellipsis",
        textOverflow: "ellipsis",
        marginLeft:"10%",
        marginTop:"7%",
    },

    body: 
    {
        height: "54px",
        overflow: "hidden",
        paddingTop: "0px !important",
        paddingRight: "0px !important",
        paddingBottom: "0px !important",
        paddingLeft: "0px !important",
        marginLeft:"10%",
        marginRight:"8%",
        marginTop:"-5%",
        borderBottom: "1px solid #eee",
    }
}


export default App1