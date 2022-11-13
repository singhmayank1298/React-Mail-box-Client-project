import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteMails, editMails } from "../../../store/mails-servers";
import classes from "./InboxContent.module.css";

import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { pureFinalPropsSelectorFactory } from "react-redux/es/connect/selectorFactory";

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
    if (props.delete === true) {
      dispatch(deleteMails(myEmail, props.id, true));
    } else {
      dispatch(deleteMails(myEmail, props.id, false));
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
      <li className={classes.lll}>
        {inFull && ReadFullMessage}
        {!inFull && (
          <>
            <Link
              to={{
                pathname: "/openmail",
                state: {
                  email: props.email,
                  content: props.content,
                },
              }}
              onClick={contentChangeHandler}
            >
              <div className={classes.dsmk}>
                <div className={props.read === false ? classes.blue : ""}></div>
                <div>{props.email}</div>
                <div>{props.content}</div>
              </div>
            </Link>
            <div className={classes.but}>
              <button onClick={deleteHandler}>Delete</button>
            </div>
          </>
        )}
      </li>
    </>
  );
};

export default InboxContent;
