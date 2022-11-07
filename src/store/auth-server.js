import axios from "axios";
import { authAction } from "./auth";

export const sendSignInRequest = (obj) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAxMJzI-dYbJ4FeuG1ITUyM5R2FhuGAgUU",
        obj
      );
      console.log(response.data);
      dispatch(authAction.responseToken(response.data.idToken));
    } catch (error) {
      alert(error);
    }
  };
};
