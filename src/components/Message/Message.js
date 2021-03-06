import "../../assets/css/message.css";

const Message = ({ message, firstMessageRef, lastMessageRef }) => {
  const inOutMessageCheck = (value) => {
    if (value % 2 === 0) {
      return "message incoming";
    } else {
      return "message outgoing";
    }
  };

  return (
    <div className={inOutMessageCheck(message.id)} key={message.id}>
      <div className="bubble-container">
        {lastMessageRef ? (
          <div className="bubble" ref={lastMessageRef}>
            {message.id} - {message.name}
          </div>
        ) : firstMessageRef ? (
          <div className="bubble" ref={firstMessageRef}>
            {message.id} - {message.name}
          </div>
        ) : (
          <div className="bubble">
            {message.id} - {message.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
