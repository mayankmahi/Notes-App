import React from "react";

const Main = () => {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" autofocus />
        <textarea id="body" placeholder="Write Something here..." />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">TITLE</h1>
        <div className="markdown-preview">Note Preview</div>
      </div>
    </div>
  );
};

export default Main;
