import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNote, changeIsHidden } from "../redux/notes/notesSlice";
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

  const handleClickCollapse = (id) => {
    dispatch(changeIsHidden(id));
  };

  const handleClickDelete = (e) => {
    dispatch(removeNote(e.target.value));
  };

  return (
    <div className="allNotes">
      {filteredNotes.map((note, index) => (
        <div key={index} className="noteBlock">
          <div
            style={{ background: note.noteColor }}
            className={`collapseBtn ${note.isHidden ? "" : "openCollapse"}`}
            onClick={() => handleClickCollapse(note.id)}
          >
            <div className="btnText">{note.title}</div>
            <button
              className="deleteBtn"
              value={note.id}
              onClick={handleClickDelete}
            >
              X
            </button>
          </div>
          <div
            style={{ background: note.noteColor }}
            className={note.isHidden ? "hidden" : "note"}
          >
            {note.note}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
