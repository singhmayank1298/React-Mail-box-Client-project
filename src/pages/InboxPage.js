import Inbox from "../components/Auth/Inbox/Inbox";
import { useSelector } from "react-redux";

const InboxPage = () => {
  const inboxArray = useSelector((state) => state.mail.inbox);
  console.log(inboxArray);
  return (
    <>
      <Inbox Mails={inboxArray} delete={false}></Inbox>
    </>
  );
};

export default InboxPage;
