import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./SideHeader.module.css";

const SideHeader = () => {
  const inboxArray = useSelector((state) => state.mail.inbox);
  console.log(inboxArray);
  let unReadMessages = 0;
  inboxArray.forEach((element) => {
    if (element.read === false) {
      unReadMessages++;
    }
  });
  return (
    <div className={classes.hhh}>
      <h3>{unReadMessages}</h3>
      <NavLink to={"/inbox"}>
        <div>
          <button>Inbox</button>
        </div>
      </NavLink>

      <NavLink to={"/sent"}>
        <div>
          <button>Sent Mails</button>
        </div>
      </NavLink>
    </div>
  );
};

export default SideHeader;
