import { Layout, Menu, Breadcrumb } from "antd";
import { Typography,Divider } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useState } from "react";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Paragraph, Text, Link } = Typography;

const MainPage = () => {
  const [collapsed, setCollapased] = useState(false);
  const onCollapse = (argv_collapsed) => {
    console.log(collapsed);
    setCollapased(argv_collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
        <Content style={{ margin: "0 16px" }}>
          <Typography>
            <Title>Department of Computer Science, SP Pune University</Title>
          </Typography>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
             <Typography>
            <Paragraph>
            The Department is one of the earliest CS Departments started in Indian Universities. Back in 1980, when computer science was little known and the word IT didn't exist, a one-year programme was started towards the B.Sc. (Applied) degree in Computer Science. The M.C.A. programme was launched in 1983, the M.Tech. degree programme in 1985, and the one year B.Sc. (Applied) programme was upgraded to a two year M.Sc. in Computer Science in 1986.
            </Paragraph>
            <Paragraph>
            The Pune University, Computer Science Department (PUCSD) Savitribai Phule Pune University is a teaching department that aims at providing quality education in Computer Science. As with any education institution, students give the department a dynamic character and an active culture towards Computer Science, guided by their faculty. Apart from teaching postgraduate level Computer Science, the faculty is also involved in research, consultancy and development programs. The support structure of the department provides all the required non-academic support to the students and the faculty.
            
              .
            </Paragraph>
            <Paragraph>
            <Text strong>
              Details of most of our activities can be found on this site. PUCSD takes care to ensure that the basic scientific principles of Computer Science are presented to the student and actively tries to point out the differences between the Computation as a science and software. Our mission statement elucidates this point further. Another characteristic academic experience at PUCSD for the student is the almost lack of any divide between Computer Science theory and practice. We try our best to maintain a 24x7 availability of our resources.
              </Text>
              </Paragraph>
        
            <Paragraph>
              <ul>
                <li>
                  <Link target="_blank" href="http://www.unipune.ac.in/dept/science/computer_science/default.htm">Link to the official site</Link>
                </li>
               </ul>
            </Paragraph>
            </Typography>
            <Divider />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Project is fully open sourced!
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainPage;
