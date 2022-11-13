import axios from "axios";

import { mailAction } from "./mails";

export const sendMail = (email, enteredContent, myEmail) => {
  console.log(myEmail);
  return async (dispatch) => {
    const obj = {
      content: enteredContent,
      email: myEmail,
      read: false,
    };
    await axios.post(
      `https://mail-box-client-84e39-default-rtdb.firebaseio.com/mails/${email}.json`,
      obj
    );

    await axios.post(
      `https://mail-box-client-84e39-default-rtdb.firebaseio.com/SentMail${myEmail}.json`,
      obj
    );

    dispatch(mailAction.change());
    alert("Mail Sent check to sent box !!!!!");
  };
};

export const getMails = (myEmail, content) => {
  console.log(myEmail);
  let url = "";
  if (content === false) {
    url = `https://mail-box-client-84e39-default-rtdb.firebaseio.com/mails/${myEmail}.json`;
  } else {
    url = `https://mail-box-client-84e39-default-rtdb.firebaseio.com/SentMail${myEmail}.json`;
  }

  return async (dispatch) => {
    const response = await axios.get(url);

    let mailsArrayDummy = [];

    for (const key in response.data) {
      mailsArrayDummy.push({
        email: response.data[key].email,
        content: response.data[key].content,
        read: response.data[key].read,
        id: key,
      });
    }
    console.log(mailsArrayDummy);
    if (content === false) {
      return dispatch(mailAction.inboxMailsHandler(mailsArrayDummy));
    } else {
      return dispatch(mailAction.sentMailsHandler(mailsArrayDummy));
    }

    // console.log(response.data);
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

export const deleteMails = (myEmail, id, forSent) => {
  return async (dispatch) => {
    let url = "";
    if (forSent === true) {
      url = `https://mail-box-client-84e39-default-rtdb.firebaseio.com/SentMail${myEmail}/${id}.json`;
    } else {
      url = `https://mail-box-client-84e39-default-rtdb.firebaseio.com/mails/${myEmail}/${id}.json`;
    }
    const response = await axios.delete(url);
    if (forSent === true) {
      dispatch(mailAction.change());
    } else {
      dispatch(mailAction.inboxDeleteHandler(id));
    }
  };
};
