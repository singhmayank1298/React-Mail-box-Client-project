import axios from "axios";

export const sendMail = (email, enteredContent, myEmail) => {
  console.log(myEmail);
  return async (dispatch) => {
    const obj = {
      content: enteredContent,
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
