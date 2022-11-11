import Inbox from "../components/Auth/Inbox/Inbox";
import { useSelector } from "react-redux";

const SentPage = () => {
  const sentArray = useSelector((state) => state.mail.sent);

  return (
    <div>
      <Inbox Mails={sentArray}></Inbox>
    </div>
  );
};

export default SentPage;
