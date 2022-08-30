import React from "react";
import { useDispatch } from "react-redux";
import { searchNote } from "../redux/notes/notesSlice";
import "../styles/search.css";

function Search() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(searchNote(e.target.value));
  };

  return (
    <input className="search" placeholder="Search" onChange={handleChange} />
  );
}

export default Search;
