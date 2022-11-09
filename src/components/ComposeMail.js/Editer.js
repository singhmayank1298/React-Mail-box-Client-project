import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Editer.module.css";

const EditorComponent = (props) => {
  const [content, setContent] = useState();

  const onContentStateChange = (contentState) => {
    let text = "";
    contentState.blocks.forEach((e) => {
      text += ` ${e.text}`;
    });
    setContent(text);
    props.content(text);
  };
  return (
    <Editor
      customStyleMap={"ddd"}
      onContentStateChange={onContentStateChange}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
      style={{ backgroundColor: "red" }}
      // editorStyle={<editorStyleObject >}
      // toolbarStyle={<toolbarStyleObject />}
    />
  );
};

export default EditorComponent;
