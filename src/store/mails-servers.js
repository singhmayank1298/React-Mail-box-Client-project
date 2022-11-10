import axios from "axios";
import { mailAction } from "./mails";

export const sendMail = (email, enteredContent, myEmail) => {
  console.log(myEmail);
  return async (dispatch) => {
    const obj = {
      content: enteredContent,
      email: myEmail,
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
      });
    }
    console.log(response.data);
    dispatch(mailAction.inboxMailsHandler(mailsArrayDummy));
  };
};
