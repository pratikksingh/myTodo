import React from "react";

export default function Note(props) {
  return (
    <div className="App">
      <button onClick={props.button}>Add Note</button>
    </div>
  );
}
