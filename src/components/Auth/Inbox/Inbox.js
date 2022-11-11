import InboxContent from "./InboxContent";

const Inbox = (props) => {
  //useEffect(() => {}, []);
  console.log(props.Mails);

  return (
    <div>
      <div>
        {props.Mails.map((x) => {
          return (
            <InboxContent
              email={x.email}
              content={x.content}
              read={x.read}
              key={Math.random()}
              id={x.id}
              delete={props.delete}
            ></InboxContent>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
