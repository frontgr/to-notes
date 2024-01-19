  import React, { useEffect, useState } from "react";
  import "./Notes.css";
  import NotesItem from "./NotesItem.jsx";

  function Notes() {
    const [textInput, setTextInput] = useState("");
    const [bigString, setBigString] = useState(false);
    const [notesData, setNotesData] = useState(
      JSON.parse(localStorage.getItem("notesData")) || [] 
    );

    useEffect(() => {
      localStorage.setItem("notesData", JSON.stringify(notesData));
    }, [notesData]);

    function funcClick() {
      if (!bigString && textInput.trim().length > 0 && textInput.length <= 300) {
        const newNote = { id: Date.now(), text: textInput.trim() };
        setNotesData((prevNotesData) => [...prevNotesData, newNote]);
        setTextInput("");
      }
    }

    function funcDelete(id) {
      setNotesData((prevNotesData) => prevNotesData.filter((note) => note.id !== id));
    }

    function funcInputChange(event) {
      setBigString(event.target.value.length > 300);
      setTextInput(event.target.value);
    }

    return (
      <div className="notes">
        <div className="notes-input">
          <input
            type="text"
            placeholder="Enter text..."
            className="notes-input__input"
            onChange={funcInputChange}
            value={textInput}
          />
          <button className="notes-input__add-btn" onClick={funcClick} />
        </div>
        <p className="big-str-alert">{bigString ? "String too big. Max length is 300." : ""}</p>
        {notesData.map((note) => (
          <NotesItem key={note.id} id={note.id} textOfNotes={note.text} onDelete={funcDelete} />
        ))}
      </div>
    );
  }

  export default Notes;
