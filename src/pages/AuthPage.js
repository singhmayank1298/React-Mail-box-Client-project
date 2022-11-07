import Auth from "../components/Auth/Auth";
import classes from "./AuthPage.module.css";

const AuthPage = () => {
  return (
    <div>
      <img
        src="/Images/blue img.jpg"
        alt="not found"
        className={classes.img}
      ></img>
      <Auth></Auth>
    </div>
  );
};

export default AuthPage;
