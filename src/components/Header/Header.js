import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.njn}>
      <div>
        <h1>Welcome to your mail box</h1>
      </div>
      <div>
        <NavLink to={"/mail"}>
          {" "}
          <h2>Compose</h2>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
