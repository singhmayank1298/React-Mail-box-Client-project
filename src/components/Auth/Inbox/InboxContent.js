import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMails, editMails } from "../../../store/mails-servers";
import classes from "./InboxContent.module.css";

const InboxContent = (props) => {
  const [inFull, setInFull] = useState(false);
  const dispatch = useDispatch();
  const myEmail = useSelector((state) => state.auth.email);

  //   if (props.read === "false" && readCss === "light") {
  //     setreadCss("blue");
  //   }

  const contentChangeHandler = () => {
    setInFull(true);
    dispatch(editMails(myEmail, props.id));
  };

  const deleteHandler = () => {
    if (inFull === false) {
      dispatch(deleteMails(myEmail, props.id, false));
    } else {
      dispatch(deleteMails(myEmail, props.id, true));
    }
  };

  const ReadFullMessage = (
    <div>
      <div>
        <h1>from{props.email}</h1>
        <textarea>{props.content}</textarea>
      </div>
    </div>
  );

  return (
    <>
      {inFull && ReadFullMessage}
      {!inFull && (
        <>
          <div onClick={contentChangeHandler}>
            <div>
              <div className={props.read === false ? classes.blue : ""}></div>
              <h2>{props.email}</h2>
              <h3>{props.content}</h3>
            </div>
          </div>
          <div>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </>
      )}
    </>
  );
};

export default InboxContent;
