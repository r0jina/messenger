import {
  Avatar,
  Button,
  Col,
  Dropdown,
  Input,
  Layout,
  Menu,
  Row,
  Tooltip,
} from "antd";
import {
  AppstoreOutlined,
  BellOutlined,
  CaretDownOutlined,
  FacebookFilled,
  HomeOutlined,
  LayoutOutlined,
  LogoutOutlined,
  SearchOutlined,
  SettingOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "../../assets/css/toplayout.css";

const { Header } = Layout;

const TopLayout = () => {
  const menu = (
    <Menu mode="horizontal">
      <Menu.Item key={"settings"} icon={<SettingOutlined />}>
        Settings
      </Menu.Item>
      <Menu.Item key={"logout"} icon={<LogoutOutlined />} onClick={""}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={topbar_background_header}>
      <Row>
        <Col span={6}>
          <Row>
            <Col span={3} offset={1}>
              <Avatar
                shape="round"
                size="large"
                icon={<FacebookFilled style={{ color: "#008ad3" }} />}
              />
            </Col>

            <Col span={17}>
              <Input
                size="large"
                placeholder="Search Facebook"
                prefix={<SearchOutlined />}
                style={{ borderRadius: 20 }}
              />
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <Row justify="center">
            <Col span={4}>
              <Tooltip placement="bottom" title={"Home"}>
                <Button
                  type="text"
                  shape="square"
                  size="large"
                  block
                  icon={
                    <HomeOutlined
                      style={{ center_icon_style, color: "#008ad3" }}
                    />
                  }
                />
              </Tooltip>
            </Col>

            <Col span={4}>
              <Tooltip placement="bottom" title={"Watch"}>
                <Button
                  type="text"
                  shape="square"
                  size="large"
                  block
                  icon={
                    <YoutubeOutlined
                      style={{ center_icon_style, color: "#008ad3" }}
                    />
                  }
                />
              </Tooltip>
            </Col>

            <Col span={4}>
              <Tooltip placement="bottom" title={"Marketplace"}>
                <Button
                  type="text"
                  shape="square"
                  size="large"
                  block
                  icon={
                    <ShopOutlined
                      style={{ center_icon_style, color: "#008ad3" }}
                    />
                  }
                />
              </Tooltip>
            </Col>

            <Col span={4}>
              <Tooltip placement="bottom" title={"Groups"}>
                <Button
                  type="text"
                  shape="square"
                  size="large"
                  block
                  icon={
                    <TeamOutlined
                      style={{ center_icon_style, color: "#008ad3" }}
                    />
                  }
                />
              </Tooltip>
            </Col>

            <Col span={4}>
              <Tooltip placement="bottom" title={"Gaming"}>
                <Button
                  type="text"
                  shape="square"
                  size="large"
                  block
                  icon={
                    <LayoutOutlined
                      style={{ center_icon_style, color: "#008ad3" }}
                    />
                  }
                />
              </Tooltip>
            </Col>
          </Row>
        </Col>

        <Col span={6}>
          <Row>
            <Col span={8} offset={7}>
              <Button type="text" size="large" shape="round">
                <>
                  <Avatar style={{ marginRight: 8 }} icon={<UserOutlined />} />
                </>
              </Button>
            </Col>

            <Col span={3}>
              <Tooltip placement="bottom" title={"Menu"}>
                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<AppstoreOutlined />}
                  style={{ topbar_buttons_right, color: "#008ad3" }}
                />
              </Tooltip>
            </Col>

            <Col span={3}>
              <Tooltip placement="bottom" title={"Notifications"}>
                <Button
                  type="text"
                  shape="circle"
                  size="large"
                  icon={<BellOutlined />}
                  style={{ topbar_buttons_right, color: "#008ad3" }}
                />
              </Tooltip>
            </Col>

            <Col span={3}>
              <Tooltip placement="bottomRight" title={"Account"}>
                <Dropdown
                  overlay={menu}
                  placement="bottomRight"
                  trigger={["click"]}
                >
                  <Button
                    type="text"
                    shape="circle"
                    size="large"
                    icon={<CaretDownOutlined />}
                    style={topbar_buttons_right}
                  />
                </Dropdown>
              </Tooltip>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default TopLayout;

const topbar_background_header = {
  background: "#fff",
  padding: 0,
  boxShadow: "10px 10px",
  borderBottom: "1px solid #f0f0f0",
};

const topbar_buttons_right = {
  backgroundColor: "#e4e6eb",
};

const center_icon_style = {
  fontSize: "x-large",
  color: "gray",
};
