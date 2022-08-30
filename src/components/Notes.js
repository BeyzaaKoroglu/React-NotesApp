import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNote } from "../redux/notes/notesSlice";
import "../styles/notes.css";

function Notes() {
  const notes = useSelector((state) => state.notes.notes);
  const searchKey = useSelector((state) => state.notes.searchKey);
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchKey.toLowerCase()) ||
      note.note.toLowerCase().includes(searchKey.toLowerCase())
  );
  const dispatch = useDispatch();
  console.log(notes);

  const deleteNote = (id) => {
    dispatch(removeNote(id));
  };

  return (
    <div className="allNotes">
      {filteredNotes.map((note, index) => (
        <div key={index} className="noteBlock">
          <div
            style={{ background: note.noteColor }}
            className="collapseBtn"
            onClick={() => console.log("efyıesgfoua")}
          >
            <div className="btnText">{note.title}</div>
            <button
              className="deleteBtn"
              onClick={() => deleteNote(note.id)}
              style={{ background: note.noteColor }}
            >
              X
            </button>
          </div>
          <div style={{ background: note.noteColor }} className="hidden">
            {note.note}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
