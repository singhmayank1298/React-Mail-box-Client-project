import { useSelector } from "react-redux";
import classess from "./Inbox.module.css";
import InboxContent from "./InboxContent";

const Inbox = () => {
  const inboxArray = useSelector((state) => state.mail.inbox);
  console.log(inboxArray);
  return (
    <div>
      <div>
        {inboxArray.map((x) => {
          return (
            <InboxContent
              email={x.email}
              content={x.content}
              key={Math.random()}
            ></InboxContent>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
