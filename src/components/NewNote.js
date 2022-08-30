import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import "../styles/newNote.css";

function NewNote() {
  const colors = ["#F06292", "#BA68C8", "#FFD54F", "#4FC3F7", "#AED581"];
  const [newNote, setNewNote] = useState({
    title: "",
    note: "",
    noteColor: "#BA68C8",
  });
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setNewNote((preState) => {
      return { ...preState, noteColor: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newNote.title || !newNote.note) return;

    dispatch(addNote(newNote));
    setNewNote({
      title: "",
      note: "",
      noteColor: "#BA68C8",
    });
  };
  return (
    <form className="newNote" onSubmit={handleSubmit}>
      <input
        className="title"
        type="text"
        placeholder="Title"
        value={newNote.title}
        onChange={(e) =>
          setNewNote((preState) => {
            return { ...preState, title: e.target.value };
          })
        }
      />
      <textarea
        className="text"
        type="text"
        placeholder="Enter your note here..."
        value={newNote.note}
        onChange={(e) =>
          setNewNote((preState) => {
            return { ...preState, note: e.target.value };
          })
        }
      />
      {colors.map((color, index) => (
        <button
          key={index}
          className="colorBtn"
          type="button"
          value={color}
          style={{ background: color }}
          onClick={handleClick}
        >
          {newNote.noteColor === color ? "\u2713" : ""}
        </button>
      ))}
      <button className="submitBtn" type="submit">
        ADD
      </button>
    </form>
  );
}

export default NewNote;
