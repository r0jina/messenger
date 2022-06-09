import { React, useEffect } from "react";
import { FaEllipsisH, FaVideo } from "react-icons/fa";
import {
  Avatar,
  Menu,
  Row,
  Col,
  List,
  Layout,
  Card,
  Typography,
  Button,
  Input,
} from "antd";
import {
  EllipsisOutlined,
  FormOutlined,
  SearchOutlined,
  UserOutlined,
  VideoCameraAddOutlined,
} from "@ant-design/icons";
import "../../assets/css/Leftsidebar.css";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux";

const { Sider } = Layout;
const { Title } = Typography;

const sidebar_buttons = {
  backgroundColor: "#e4e6eb",
};

const selected_style = {
  backgroundColor: "#eaf3ff",
  paddingLeft: 12,
  borderRadius: 10,
};

const unselected_style = {
  backgroundColor: "#eaf3ff",
  paddingLeft: 12,
  borderRadius: 10,
};

const LeftSidebar = (props) => {
  // const data = [
  //   {
  //     id: 2182,
  //     name: "Fr. Rati Kaur",
  //     email: "rati_kaur_fr@lehner.info",
  //     gender: "female",
  //     status: "active",
  //   },
  //   {
  //     id: 2181,
  //     name: "Aanjaneya Nehru",
  //     email: "nehru_aanjaneya@dickinson-ferry.net",
  //     gender: "female",
  //     status: "inactive",
  //   },
  //   {
  //     id: 2180,
  //     name: "Mrs. Bhamini Guha",
  //     email: "bhamini_mrs_guha@bayer-wisozk.net",
  //     gender: "female",
  //     status: "active",
  //   },
  //   {
  //     id: 2179,
  //     name: "Miss Karthik Tandon",
  //     email: "tandon_karthik_miss@collier.name",
  //     gender: "male",
  //     status: "inactive",
  //   },
  //   {
  //     id: 2178,
  //     name: "Deepesh Devar",
  //     email: "deepesh_devar@thompson.info",
  //     gender: "female",
  //     status: "active",
  //   },
  //   {
  //     id: 2177,
  //     name: "Pres. Heema Adiga",
  //     email: "pres_heema_adiga@hyatt-towne.info",
  //     gender: "male",
  //     status: "inactive",
  //   },
  //   {
  //     id: 2176,
  //     name: "Ms. Vinay Nambeesan",
  //     email: "vinay_ms_nambeesan@herman.io",
  //     gender: "male",
  //     status: "inactive",
  //   },
  //   {
  //     id: 2175,
  //     name: "Sen. Uma Kaur",
  //     email: "sen_uma_kaur@corwin.info",
  //     gender: "male",
  //     status: "active",
  //   },
  //   {
  //     id: 2174,
  //     name: "Pres. Inder Iyer",
  //     email: "iyer_pres_inder@trantow.info",
  //     gender: "male",
  //     status: "inactive",
  //   },
  //   {
  //     id: 2173,
  //     name: "Mr. Dhanesh Adiga",
  //     email: "mr_dhanesh_adiga@parisian.net",
  //     gender: "female",
  //     status: "active",
  //   },
  //   {
  //     id: 2172,
  //     name: "Gati Sinha",
  //     email: "sinha_gati@miller.net",
  //     gender: "female",
  //     status: "inactive",
  //   },
  //   {
  //     id: 2171,
  //     name: "Kama Butt",
  //     email: "butt_kama@botsford.name",
  //     gender: "male",
  //     status: "inactive",
  //   },
  //   {
  //     id: 2170,
  //     name: "Chandak Singh",
  //     email: "singh_chandak@prohaska-mcglynn.name",
  //     gender: "female",
  //     status: "inactive",
  //   },
  //   {
  //     id: 2169,
  //     name: "Ms. Chandrabhaga Abbott",
  //     email: "chandrabhaga_abbott_ms@rohan-spinka.co",
  //     gender: "female",
  //     status: "active",
  //   },
  //   {
  //     id: 2168,
  //     name: "Sharda Namboothiri DDS",
  //     email: "sharda_namboothiri_dds@treutel-kshlerin.name",
  //     gender: "male",
  //     status: "inactive",
  //   },
  //   {
  //     id: 2167,
  //     name: "Aanand Gowda CPA",
  //     email: "gowda_cpa_aanand@gerlach.info",
  //     gender: "female",
  //     status: "inactive",
  //   },
  //   {
  //     id: 2166,
  //     name: "Dayaananda Bandopadhyay CPA",
  //     email: "bandopadhyay_cpa_dayaananda@mckenzie.io",
  //     gender: "male",
  //     status: "active",
  //   },
  //   {
  //     id: 2165,
  //     name: "Bhaves Joshi",
  //     email: "joshi_bhaves@hermiston.name",
  //     gender: "female",
  //     status: "active",
  //   },
  //   {
  //     id: 2164,
  //     name: "Sarisha Tagore",
  //     email: "sarisha_tagore@schmitt.biz",
  //     gender: "male",
  //     status: "active",
  //   },
  //   {
  //     id: 2163,
  //     name: "Geetanjali Guha",
  //     email: "geetanjali_guha@kreiger.com",
  //     gender: "female",
  //     status: "active",
  //   },
  // ];
  console.log("hhh", props.userData);

  useEffect(() => {
    props.fetchUsers(); // get users data according to the page number
  }, []);

  return (
    <Sider width="23%">
      <Menu
        mode="inline"
        style={{ height: "100%", borderRight: 0 }}
        bodyStyle={{ paddingTop: 12 }}
      >
        <Card
          bordered={false}
          style={{ borderRadius: 0 }}
          bodyStyle={{ paddingTop: 12 }}
        >
          <Row>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <Title level={3} strong>
                    Chats
                  </Title>
                </Col>
              </Row>
            </Col>

            <Col span={12}>
              <Row>
                <Col span={8}>
                  <Button
                    type="text"
                    shape="circle"
                    size="large"
                    icon={<EllipsisOutlined />}
                    style={{ sidebar_buttons, color: "#008ad3" }}
                  />
                </Col>

                <Col span={8}>
                  <Button
                    type="text"
                    shape="circle"
                    size="large"
                    icon={<VideoCameraAddOutlined />}
                    style={{ sidebar_buttons, color: "#008ad3" }}
                  />
                </Col>

                <Col span={8}>
                  <Button
                    type="text"
                    shape="circle"
                    size="large"
                    icon={<FormOutlined />}
                    style={{ sidebar_buttons, color: "#008ad3" }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: 12 }}>
            <Col span={24}>
              <Input
                placeholder="Search Messenger"
                prefix={<SearchOutlined />}
                style={{ borderRadius: 20 }}
              />
            </Col>
          </Row>
        </Card>

        <Card
          bordered={false}
          style={{ borderRadius: 0 }}
          bodyStyle={{ paddingTop: 0 }}
        >
          <Row>
            <Col span={24}>
              <List
                itemLayout="horizontal"
                dataSource={props.userData.users}
                renderItem={(item, index) => (
                  <List.Item key={index}>
                    <List.Item.Meta
                      avatar={<Avatar icon={<UserOutlined />} />}
                      title={item.name}
                    />
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        </Card>
      </Menu>
    </Sider>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);
