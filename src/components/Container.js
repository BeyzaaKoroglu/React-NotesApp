import React from "react";
import "../styles/container.css";
import Header from "./Header";
import Search from "./Search";
import NewNote from "./NewNote";
import Notes from "./Notes";

function Container() {
  return (
    <div className="container">
      <Header />
      <Search />
      <NewNote />
      <Notes />
    </div>
  );
}

export default Container;
