import React, { useState } from "react";
import Note from "./Note.js";
import "./App.css";
import plus from "./images/plus.png";

function App() {
  const [newNote, setNewNote] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [note, setNote] = useState(false);

  const btnNote = () => {
    setNote(() => {
      return true;
    });
  };

  const addNote = () => {
    setNote(() => {
      return false;
    });
    setNewNote([...newNote, currentNote]);
    setCurrentNote("");
  };

  const delNote = (id) => {
    setNewNote(
      newNote.filter((note) => {
        return id !== note;
      })
    );
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <div className="hero">
        <h3>To create a new note click on the +</h3>

        <img className="plus" alt="plus_button" src={plus} onClick={btnNote} />
        {note && (
          <input
            type="text"
            placeholder="New note..."
            onChange={(event) => {
              setCurrentNote(event.target.value);
            }}
          />
        )}
        {note && <Note button={addNote} />}
      </div>

      <div className="notes">
        {newNote && (
          <div>
            {newNote
              .map((val, key) => {
                return (
                  <ul id="plusNote" key={key}>
                    <div className="note-item">
                      <small className="small">Note {key + 1}</small>
                      <small className="delete" onClick={() => delNote(val)}>
                        X
                      </small>
                    </div>
                    <li>
                      <h3>{val}</h3>
                    </li>
                  </ul>
                );
              })
              .reverse()}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
