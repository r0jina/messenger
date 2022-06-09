import React from "react";
import { Layout } from "antd";
import { useState } from "react";
import LeftSidebar from "./components/Sidebar/LeftSidebar";
import TopLayout from "./components/TopLayout/TopLayout";
import Messenger from "./components/Message/Messenger";
import RightSidebar from "./components/Sidebar/RightSidebar";
import { Provider } from "react-redux";
import store from "./redux/store";

const { Content } = Layout;

function App() {
  const [rightSidebarState, setRightSidebarState] = useState(true);

  const handleInformationButtonClick = () => {
    setRightSidebarState(!rightSidebarState);
  };

  return (
    <Provider store={store}>
      <Layout style={{ minHeight: "100vh" }}>
        <TopLayout />

        <Layout>
          <LeftSidebar />

          <Layout style={{ padding: 0 }}>
            <Content style={{ margin: 0 }}>
              <Messenger
                onInformationButtonClick={handleInformationButtonClick}
                rightSidebarState={rightSidebarState}
              />
            </Content>
          </Layout>

          {rightSidebarState ? <RightSidebar /> : ""}
        </Layout>
      </Layout>
    </Provider>
  );
}

export default App;
