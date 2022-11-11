import axios from "axios";
import { useSelector } from "react-redux";

import { mailAction } from "./mails";

export const sendMail = (email, enteredContent, myEmail) => {
  console.log(myEmail);
  return async (dispatch) => {
    const obj = {
      content: enteredContent,
      email: myEmail,
      read: false,
    };
    const response1 = await axios.post(
      `https://mail-box-client-84e39-default-rtdb.firebaseio.com/mails/${email}.json`,
      obj
    );

    const response2 = await axios.post(
      `https://mail-box-client-84e39-default-rtdb.firebaseio.com/SentMail${myEmail}/${email}.json`,
      obj
    );

    console.log(response1.data);
  };
};

export const getMails = (myEmail) => {
  console.log(myEmail);
  return async (dispatch) => {
    const response = await axios.get(
      `https://mail-box-client-84e39-default-rtdb.firebaseio.com/mails/${myEmail}.json`
    );
    let mailsArrayDummy = [];
    for (const key in response.data) {
      mailsArrayDummy.push({
        email: response.data[key].email,
        content: response.data[key].content,
        read: response.data[key].read,
        id: key,
      });
    }
    console.log(response.data);

    dispatch(mailAction.inboxMailsHandler(mailsArrayDummy));
  };
};

export const editMails = (myEmail, id) => {
  return async (dispatch) => {
    const response = await axios.put(
      `https://mail-box-client-84e39-default-rtdb.firebaseio.com/mails/${myEmail}/${id}/read.json`,
      true
    );

    console.log(response.data);
    dispatch(mailAction.inboxEditHandler(id));
  };
};

export const deleteMails = (myEmail, id) => {
  return async (dispatch) => {
    const response = await axios.delete(
      `https://mail-box-client-84e39-default-rtdb.firebaseio.com/mails/${myEmail}/${id}.json`
    );
    dispatch(mailAction.inboxDeleteHandler(id));
  };
};
