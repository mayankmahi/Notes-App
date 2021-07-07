import React from "react";

const Main = ({ activeNote }) => {
  console.log(activeNote);
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" autofocus value={activeNote.title} />
        <textarea
          id="body"
          placeholder="Write Something here..."
          value={activeNote.body}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.body}</div>
      </div>
    </div>
  );
};

export default Main;
