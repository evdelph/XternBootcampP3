import React from 'react'

const NoteList = () => {
    return(
        <div className="NoteList" style={styles.div}>
          <h3 style={styles.h3}>Notes</h3>
          <ul id="notes" style={styles.ul}>
            <a className="active">
              <li style={styles.li}>
                <div className="note" >
                  <div className="note-title" style={styles.title}>
                    Kohlrabi welsh
                  </div>
                  <div className="note-body" style={styles.body}>
                    <p>
                       test
                    </p>
                  </div>
                </div>
              </li>
            </a>
            <a className="active">
              <li style={styles.li}>
                <div className="note" >
                  <div className="note-title" style={styles.title}>
                    Kohlrabi welsh
                  </div>
                  <div className="note-body" style={styles.body}>
                    <p>
                       fffffffffff 4534534 fdgfsdg dsfg sdfg fdg dfsg sdfsdaf sadfs adf sdf asdf asdf asdf asdf asfasd
                    </p>
                  </div>
                </div>
              </li>
            </a>
          </ul>
        </div>           
    )
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


export default NoteList