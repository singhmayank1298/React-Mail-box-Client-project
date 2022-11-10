import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const SideHeader = () => {
  const inboxArray = useSelector((state) => state.mail.inbox);
  let unReadMessages = 0;
  inboxArray.forEach((element) => {
    if (element.read === false) {
      unReadMessages++;
    }
  });
  return (
    <div>
      <h3>{unReadMessages}</h3>
      <NavLink to={"/inbox"}>
        <div>
          <button>Inbox</button>
        </div>
      </NavLink>
    </div>
  );
};

export default SideHeader;
