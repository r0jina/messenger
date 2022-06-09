import React from "react";
import {
  Avatar,
  Button,
  Card,
  Col,
  Input,
  Row,
  Tooltip,
  Typography,
} from "antd";
import {
  ExclamationCircleTwoTone,
  GifOutlined,
  LikeTwoTone,
  PhoneTwoTone,
  PictureTwoTone,
  PlusCircleTwoTone,
  SmileTwoTone,
  UserOutlined,
  VideoCameraTwoTone,
} from "@ant-design/icons";
import MessageList from "./MessageList";

const { Title } = Typography;

const Messenger = ({ onInformationButtonClick, rightSidebarState }) => {
  const CardTitle = () => {
    return (
      <Row>
        <Avatar size="large" icon={<UserOutlined />} />
        <Title level={4} style={{ marginLeft: 8, marginTop: 5 }}>
          Fr Rati Kaur
        </Title>
      </Row>
    );
  };

  const ExtraButtons = () => {
    return (
      <Row>
        <Col span={8}>
          <Tooltip placement="bottom" title={"Start a voice call"}>
            <Button
              type="text"
              shape="circle"
              size="large"
              icon={
                <PhoneTwoTone style={{ extra_icon_style, color: "#008ad3" }} />
              }
            />
          </Tooltip>
        </Col>

        <Col span={8}>
          <Tooltip placement="bottom" title={"Start a video call"}>
            <Button
              type="text"
              shape="circle"
              size="large"
              icon={
                <VideoCameraTwoTone
                  style={{ extra_icon_style, color: "#008ad3" }}
                />
              }
            />
          </Tooltip>
        </Col>

        <Col span={8}>
          <Tooltip placement="bottom" title={"Conversation information"}>
            <Button
              type="text"
              shape="circle"
              size="large"
              icon={<ExclamationCircleTwoTone style={extra_icon_style} />}
              onClick={onInformationButtonClick}
              style={
                rightSidebarState
                  ? { backgroundColor: "#cae9ff", color: "#008ad3" }
                  : {}
              }
            />
          </Tooltip>
        </Col>
      </Row>
    );
  };

  const CardFooter = () => {
    return (
      <Card
        bordered={false}
        style={{ borderRadius: 0 }}
        bodyStyle={{ padding: "0 6px 6px 6px" }}
      >
        <Row>
          <Col span={4}>
            <Row style={{ marginTop: 6, marginRight: 6 }}>
              <Col span={6}>
                <Button
                  type="text"
                  shape="circle"
                  icon={<PlusCircleTwoTone />}
                />
              </Col>

              <Col span={6}>
                <Button type="text" shape="circle" icon={<PictureTwoTone />} />
              </Col>

              <Col span={6}>
                <Button type="text" shape="circle" icon={<SmileTwoTone />} />
              </Col>

              <Col span={6}>
                <Button
                  type="text"
                  shape="circle"
                  icon={<GifOutlined style={{ color: "#1890ff" }} />}
                />
              </Col>
            </Row>
          </Col>

          <Col span={19}>
            <Row>
              <Col span={24}>
                <Input
                  placeholder="Aa"
                  style={{ borderRadius: 20 }}
                  suffix={
                    <Button type="text" shape="circle">
                      <SmileTwoTone />
                    </Button>
                  }
                />
              </Col>
            </Row>
          </Col>

          <Col span={1}>
            <Row style={{ marginTop: 4, marginLeft: 6, marginRight: 6 }}>
              <Col span={24}>
                <Button type="text" shape="circle" icon={<LikeTwoTone />} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    );
  };

  return (
    <Card
      title={<CardTitle />}
      extra={<ExtraButtons />}
      actions={[<CardFooter />]}
      bordered={true}
      style={card_style}
      bodyStyle={{ padding: 0 }}
    >
      <MessageList />
    </Card>
  );
};

export default Messenger;

const card_style = {
  height: "100%",
  borderRadius: 0,
  borderTop: 0,
};

const extra_icon_style = {
  fontSize: "x-large",
  color: "gray",
};
