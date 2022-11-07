import axios from "axios";
import { authAction } from "./auth";

export const sendSignInRequest = (obj, loginSingup) => {
  return async (dispatch) => {
    try {
      let url = "";
      if (loginSingup === "Singup") {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxMJzI-dYbJ4FeuG1ITUyM5R2FhuGAgUU";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAxMJzI-dYbJ4FeuG1ITUyM5R2FhuGAgUU";
      }
      const response = await axios.post(url, obj);
      console.log(response.data);
      if (loginSingup === "Login") {
        dispatch(authAction.responseToken(response.data.idToken));
      } else {
        console.log("Your have been signup");
      }
    } catch (error) {
      alert(error);
    }
  };
};
