import { NavLink } from "react-router-dom";

const SideHeader = () => {
  return (
    <div>
      <NavLink to={"/inbox"}>
        <div>
          <button>Inbox</button>
        </div>
      </NavLink>
    </div>
  );
};

export default SideHeader;
