import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editMails } from "../../../store/mails-servers";
import classes from "./InboxContent.module.css";

const InboxContent = (props) => {
  const [inFull, setInFull] = useState(false);
  const dispatch = useDispatch();

  //   if (props.read === "false" && readCss === "light") {
  //     setreadCss("blue");
  //   }

  const contentChangeHandler = () => {
    setInFull(true);
    dispatch(editMails(props.email, props.id));
  };

  const readFullMessage = (
    <div>
      <di>
        <h1>from{props.email}</h1>
        <textarea>{props.content}</textarea>
      </di>
    </div>
  );

  return (
    <>
      {inFull && readFullMessage}
      {!inFull && (
        <div onClick={contentChangeHandler}>
          <div>
            <div className={props.read === false ? classes.blue : ""}></div>
            <h2>{props.email}</h2>
            <h3>{props.content}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default InboxContent;
