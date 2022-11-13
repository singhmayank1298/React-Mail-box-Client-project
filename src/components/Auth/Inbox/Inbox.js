import InboxContent from "./InboxContent";
import classes from "./Inbox.module.css";

const Inbox = (props) => {
  //useEffect(() => {}, []);
  console.log(props.Mails);

  return (
    <div className={classes.kkk}>
      <div>
        {props.Mails.map((x) => {
          return (
            <ul key={Math.random()} className={classes.fjf}>
              <InboxContent
                email={x.email}
                content={x.content}
                read={x.read}
                id={x.id}
                delete={props.delete}
              ></InboxContent>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
