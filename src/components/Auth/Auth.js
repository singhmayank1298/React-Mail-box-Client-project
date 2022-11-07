import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { sendSignInRequest } from "../../store/auth-server";
import classes from "./Auth.module.css";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  //const confirmPasswordRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const obj = {
      email: emailRef.current.value,
      password: emailRef.current.value,
    };
    await dispatch(sendSignInRequest(obj));
    console.log("dnssjn");
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.container2}>
          <h3>{isSignUp ? "Signup" : "Login"}</h3>
          <form onSubmit={submitHandler}>
            <div className={classes.for}>
              <input placeholder="Email" ref={emailRef} required></input>
            </div>
            <div className={classes.for}>
              <input placeholder="Password" ref={passwordRef} required></input>
            </div>
            <div className={classes.for}>
              <input placeholder="Confirm Password" required></input>
            </div>
            <button type="submit">{isSignUp ? "Signup" : "Login"}</button>
          </form>
        </div>
      </div>
      <div className={classes.what} onClick={() => setIsSignUp((pre) => !pre)}>
        <h2>Have an account?{isSignUp ? "Signup" : "Login"}</h2>
      </div>
    </>
  );
};

export default Auth;
