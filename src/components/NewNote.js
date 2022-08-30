import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import "../styles/newNote.css";

function NewNote() {
  const [newNote, setNewNote] = useState({
    title: "",
    note: "",
    noteColor: "",
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
      noteColor: "#F06292",
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
      <button
        className="colorBtn"
        type="button"
        value={"#F06292"}
        style={{ background: "#F06292" }}
        onClick={handleClick}
      ></button>
      <button
        className="colorBtn"
        type="button"
        value={"#BA68C8"}
        style={{ background: "#BA68C8" }}
        onClick={handleClick}
      ></button>
      <button
        className="colorBtn"
        type="button"
        value={"#FFD54F"}
        style={{ background: "#FFD54F" }}
        onClick={handleClick}
      ></button>
      <button
        className="colorBtn"
        type="button"
        value={"#4FC3F7"}
        style={{ background: "#4FC3F7" }}
        onClick={handleClick}
      ></button>
      <button
        className="colorBtn"
        type="button"
        value={"#AED581"}
        style={{ background: "#AED581" }}
        onClick={handleClick}
      ></button>
      <button className="submitBtn" type="submit">
        ADD
      </button>
    </form>
  );
}

export default NewNote;
