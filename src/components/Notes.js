import React from "react";
import "../styles/notes.css";

function Notes() {
  return (
    <div className="allNotes">
      <div className="noteBlock">
        <button className="collapseBtn">Note 1</button>
        <div className="hidden">
          fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa
          fduofhpıa
        </div>
      </div>
      <div className="noteBlock">
        <button className="collapseBtn">Note 2</button>
        <div className="hidden">
          fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa
          fduofhpıa
        </div>
      </div>
      <div className="noteBlock">
        <button className="collapseBtn">Note 3</button>
        <div className="hidden">
          fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa
          fduofhpıa
        </div>
      </div>
      <div className="noteBlock">
        <button className="collapseBtn">Note 4</button>
        <div className="hidden">
          fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa fduofhpıa
          fduofhpıa
        </div>
      </div>
    </div>
  );
}

export default Notes;
