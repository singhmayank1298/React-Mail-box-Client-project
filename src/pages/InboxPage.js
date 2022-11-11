import Inbox from "../components/Auth/Inbox/Inbox";
import { useSelector } from "react-redux";

const InboxPage = () => {
  const inboxArray = useSelector((state) => state.mail.inbox);
  console.log(inboxArray);
  return (
    <div>
      <Inbox Mails={inboxArray}></Inbox>
    </div>
  );
};

export default InboxPage;
