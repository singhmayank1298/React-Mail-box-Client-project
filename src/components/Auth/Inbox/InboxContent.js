const InboxContent = (props) => {
  return (
    <div>
      <div>
        <h2>{props.email}</h2>
        <h3>{props.content}</h3>
      </div>
    </div>
  );
};

export default InboxContent;
