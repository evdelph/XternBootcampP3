import React from 'react'

const NoteForm = () => {
    return(
        <div className="NoteForm" style={styles.main}>
        <div className="form-actions">
          <button type="button" style={styles.button}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
        <form>
          <p>
            <input type="text" name="title" placeholder="Title your note" style={styles.title}/>
          </p>
          <textarea name="body" style={styles.body}></textarea>
        </form>
      </div>
    )
}

const styles = {
    main:
    {
        msFlexPositive: "1",
        flexGrow: "1",
        padding: "0 3rem",
    },
    button:
    {
        color: "#999",
        background: 'transparent',
        border: 'none',
        backgroundColor: "#fff",
        fontSize: "2rem",
        padding: "0",
        marginLeft: "-2%",

    },
    title :
    {
        border: "none",
        fontSize: "200%",
        fontFamily: "Fauna One",
        color: "#008bf8",
        fontWeight: "400",
        width: "100%",
        outline: "none",
        marginLeft: "5%",
        maxWidth:"80rem",
    },
    body:
    {
        borderColor: "#eee",
        width: "100%",
        height: "calc(100vh - 140px)",
        fontSize: "1.3em",
        maxWidth:"80rem",
        maxHeight: "70rem",
        marginLeft: "5%",
    }

}
export default NoteForm