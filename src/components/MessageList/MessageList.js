import { createRef, useCallback, useEffect, useRef, useState } from "react";
import { Avatar, Divider, Spin, Typography } from "antd";
import "../../assets/css/message.css";
import Message from "../Message/Message";
import { UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux";

const { Title } = Typography;

const MessageList = ({ userData, fetchUsers }) => {
  const [pageNumber, setPageNumber] = useState(100); //starting page for the api

  const [messages, setMessages] = useState([]); // actual data displayed

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchUsers(pageNumber); // get users data according to the page number
  }, [pageNumber]); //triggers everytime pageNumber changes

  const { users, loading, error, max } = userData; // destructuring the fetched data

  useEffect(() => {
    const sortList = (list) => {
      return list.sort(function (a, b) {
        return a.id - b.id;
      });
    };

    if (users.length !== 0) {
      let newList = [...messages, ...new Set(sortList(users))]; // sorting and making the fetched data unique, appending the data to the list to be displayed
      setMessages([...new Set(newList)]); // making the list to be displayed unique
    }
  }, [users]);

  const firstMessageRef = createRef();

  const observer = useRef(null);

  const lastMessageRef = useCallback(
    (node) => {
      if (loading) {
        return; // if loading return
      }

      if (observer.current) {
        observer.current.disconnect(); // remove the previous ref
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && max === false) {
          // get the last message element
          console.log("Last Element Visible");
          setPageNumber((pageNumber) => pageNumber - 1); // goto next page i.e. change pageNumber
          if (count === 2) {
            node.scrollIntoView({ behavior: "auto" }); // stick the scroll to the last element so that it does not scroll up and fetch data continuously
          }
        }
      });

      if (node) {
        observer.current.observe(node); // set new message element to ref
      }
    },
    [loading, max]
  );

  useEffect(() => {
    const scrollToBottom = () => {
      firstMessageRef.current.scrollIntoView({ behavior: "auto" });
    };

    if (messages.length > 0 && loading === false && count === 0) {
      scrollToBottom(); // scroll to the first message after the data has been loaded but only once
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
          // check if last element to set ref to last message
          return (
            <Message
              message={message}
              key={message.id}
              lastMessageRef={lastMessageRef}
            />
          );
        } else {
          if (index === 0) {
            // check if first element to set ref to fist message
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
