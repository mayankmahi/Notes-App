import React from "react";

const Sidebar = ({ notes, onAddNote }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={onAddNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className="app-sidebar-note">
            <div className="sidebar-note-tittle">
              <strong>{note.title}</strong>
              <button>Delete</button>
            </div>
            <p>{note.body}</p>

            <small className="note-meta">
              Last Modified [{note.lastModified}]
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
