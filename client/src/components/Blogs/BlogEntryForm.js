import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";

function BlogEntryForm() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  return (
    <div>
      <form>
        <label>Blog Title</label>
        <input></input>
        <label>Thumbnail</label>
        <input></input>
        <label>Thumbnail</label>
        <input></input>
      </form>
    </div>
  );
}

export default BlogEntryForm;
