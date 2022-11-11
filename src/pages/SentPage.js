import Inbox from "../components/Auth/Inbox/Inbox";
import { useSelector } from "react-redux";

const SentPage = () => {
  const sentArray = useSelector((state) => state.mail.sent);

  return (
    <>
      <Inbox Mails={sentArray} delete={true}></Inbox>
    </>
  );
};

export default SentPage;
