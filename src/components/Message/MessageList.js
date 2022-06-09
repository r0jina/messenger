import { Avatar, Divider, Spin, Typography } from "antd";
import "../../assets/css/message.css";
import { createRef, useCallback, useEffect, useRef, useState } from "react";
import Message from "./Message";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux";

const { Title } = Typography;

const MessageList = ({ userData, fetchUsers }) => {
  const [pageNumber, setPageNumber] = useState(100);

  const [messages, setMessages] = useState([]);

  const [count, setCount] = useState(0);

  const { users, loading, error, max } = userData;

  useEffect(() => {
    fetchUsers(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    const sortList = (list) => {
      return list.sort(function (a, b) {
        return a.id - b.id;
      });
    };

    if (users.length !== 0) {
      let newList = [...messages, ...new Set(sortList(users))];
      setMessages([...new Set(newList)]);
    }
  }, [users]);

  const firstMessageRef = createRef();

  const observer = useRef(null);

  const lastMessageRef = useCallback(
    (node) => {
      if (loading) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && max === false) {
          console.log("Last Element Visible");
          setPageNumber((pageNumber) => pageNumber - 1);
          if (count === 2) {
            node.scrollIntoView({ behavior: "auto" });
          }
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [loading, max]
  );

  useEffect(() => {
    const scrollToBottom = () => {
      firstMessageRef.current.scrollIntoView({ behavior: "auto" });
    };

    if (messages.length > 0 && loading === false && count === 0) {
      scrollToBottom();
      setCount(2);
    }
  }, [loading, messages, count, firstMessageRef]);

  const NoContent = () => {
    return (
      <div style={{ textAlign: "center", paddingTop: 24 }}>
        <Avatar size={65} icon={<UserOutlined />} />

        <Title level={5} style={{ marginTop: 4 }}>
          Jane Doe
        </Title>

        <Divider />
      </div>
    );
  };

  const Spinner = () => {
    return (
      <div style={{ textAlign: "center", padding: 24 }}>
        <Spin />
      </div>
    );
  };

  const Error = () => {
    return (
      <div style={{ textAlign: "center", padding: 24 }}>
        <Title level={5}>Error.</Title>
      </div>
    );
  };

  return (
    <div style={message_list_container}>
      {messages.map((message, index) => {
        if (messages.length === index + 1) {
          return (
            <Message
              message={message}
              key={message.id}
              lastMessageRef={lastMessageRef}
            />
          );
        } else {
          if (index === 0) {
            return (
              <Message
                message={message}
                key={message.id}
                firstMessageRef={firstMessageRef}
              />
            );
          } else {
            return <Message message={message} key={message.id} />;
          }
        }
      })}

      {loading && <Spinner />}

      {error && <Error />}

      {max && <NoContent />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (pageNumber) => dispatch(fetchUsers(pageNumber)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

const message_list_container = {
  padding: "0 24px 20px",
  height: "calc(100vh - 212px)",
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column-reverse",
};
