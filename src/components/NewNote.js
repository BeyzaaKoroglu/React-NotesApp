import React from "react";
import "../styles/newNote.css";

function NewNote() {
  return (
    <form className="newNote">
      <input className="title" type="text" placeholder="Title" />
      <textarea
        className="text"
        type="text"
        placeholder="Enter your note here..."
      />
      <button
        className="colorBtn"
        type="button"
        style={{ background: "#F06292" }}
      ></button>
      <button
        className="colorBtn"
        type="button"
        style={{ background: "#BA68C8" }}
      ></button>
      <button
        className="colorBtn"
        type="button"
        style={{ background: "#FFD54F" }}
      ></button>
      <button
        className="colorBtn"
        type="button"
        style={{ background: "#4FC3F7" }}
      ></button>
      <button
        className="colorBtn"
        type="button"
        style={{ background: "#AED581" }}
      ></button>
      <button className="submitBtn" type="submit">
        ADD
      </button>
    </form>
  );
}

export default NewNote;
