import classes from "./Compose.module.css";
import { useState } from "react";
import EditorComponent from "./Editer";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { sendMail } from "../../store/mails-servers";

const ComposeMail = () => {
  const [mailContent, setMailContent] = useState("");
  const dispatch = useDispatch();
  const emailRef = useRef();
  const myEmail = useSelector((state) => state.auth.email);

  const contentHandler = (content) => {
    setMailContent(content);
  };

  const sendMailHandler = (e) => {
    e.preventDefault();
    const enteredEmailRef = emailRef.current.value;
    dispatch(sendMail(enteredEmailRef, mailContent, myEmail));
  };

  return (
    <div className={classes.iff}>
      <div>
        <form>
          <div className={classes.fkd}>
            <h2>To:</h2>
            <input className={classes.jjj} ref={emailRef}></input>
            <h3>CC/Bcc</h3>
          </div>

          <div className={classes.fk}>
            <input></input>
          </div>
          <div>
            <button onClick={sendMailHandler}>Send</button>
            <div>
              <EditorComponent content={contentHandler}></EditorComponent>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComposeMail;
