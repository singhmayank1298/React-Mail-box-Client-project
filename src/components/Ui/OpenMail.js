import { useLocation } from "react-router-dom";
import classes from "./OpenMail.module.css";

const OpenMAil = () => {
  const location = useLocation();
  console.log("efnen");
  const { email, content } = location.state;
  return (
    <div className={classes.fff}>
      <div className={classes.nmdk}>
        From:
        <input value={email}></input>
      </div>
      <div className={classes.nmdk}>
        <div>xyz</div>
      </div>
      <div className={classes.f}>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default OpenMAil;
