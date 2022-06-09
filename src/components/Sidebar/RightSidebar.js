import { Avatar, Button, Card, Collapse, Layout, Typography } from "antd";
import {
  BellOutlined,
  FileImageOutlined,
  FileTextOutlined,
  FontColorsOutlined,
  LikeTwoTone,
  LinkOutlined,
  MessageOutlined,
  SearchOutlined,
  SmileTwoTone,
  UserDeleteOutlined,
  UserOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import "../../assets/css/rightsidebar.css";

const { Sider } = Layout;
const { Title } = Typography;
const { Panel } = Collapse;

const RightSidebar = () => {
  return (
    <Sider width="25%">
      <Card bordered={false} style={{ borderRadius: 0, height: "100%" }}>
        <div style={{ textAlign: "center" }}>
          <Avatar size={75} icon={<UserOutlined />} />

          <Title level={4} style={{ marginTop: 4 }}>
            Fr Rati Kaur
          </Title>
        </div>

        <Collapse ghost expandIconPosition="right">
          <Panel header="Customize Chat" key="1">
            <Button
              size="large"
              block
              type="text"
              icon={<LikeTwoTone />}
              style={button_style}
            >
              Change Emoji
            </Button>

            <Button
              size="large"
              block
              type="text"
              icon={<SmileTwoTone />}
              style={button_style}
            >
              Change Theme
            </Button>

            <Button
              size="large"
              block
              type="text"
              icon={<FontColorsOutlined />}
              style={button_style}
            >
              Edit nicknames
            </Button>

            <Button
              size="large"
              block
              type="text"
              icon={<SearchOutlined />}
              style={button_style}
            >
              Search in conversation
            </Button>
          </Panel>

          <Panel header="Media, files and links" key="2">
            <Button
              size="large"
              block
              type="text"
              icon={<FileImageOutlined />}
              style={button_style}
            >
              Media
            </Button>

            <Button
              size="large"
              block
              type="text"
              icon={<FileTextOutlined />}
              style={button_style}
            >
              Files
            </Button>

            <Button
              size="large"
              block
              type="text"
              icon={<LinkOutlined />}
              style={button_style}
            >
              Links
            </Button>
          </Panel>

          <Panel header="Privacy & support" key="3">
            <Button
              size="large"
              block
              type="text"
              icon={<BellOutlined />}
              style={button_style}
            >
              Mute notifications
            </Button>

            <Button
              size="large"
              block
              type="text"
              icon={<MessageOutlined />}
              style={button_style}
            >
              Ignore messages
            </Button>

            <Button
              size="large"
              block
              type="text"
              icon={<UserDeleteOutlined />}
              style={button_style}
            >
              Block
            </Button>

            <Button
              size="large"
              block
              type="text"
              icon={<WarningOutlined />}
              style={button_style}
            >
              Report
            </Button>
          </Panel>
        </Collapse>
      </Card>
    </Sider>
  );
};

export default RightSidebar;

const button_style = {
  textAlign: "left",
  borderRadius: 10,
};
