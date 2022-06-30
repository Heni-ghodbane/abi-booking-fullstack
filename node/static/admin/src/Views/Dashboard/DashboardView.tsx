import React, { useState } from "react";
import { Layout, Menu} from "antd";
import { CarOutlined, CheckCircleOutlined, CheckCircleTwoTone, MenuFoldOutlined, MenuUnfoldOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import DashboardHeader from "./Components/DashboardHeader";
import DashboardBody from "./Components/DashboardBody";
import DashboardFooter from "./Components/DashboardFooter";
import './style.css'
import { Link } from "react-router-dom";
import { UserInfoProvider } from "./Views/UsersViews/hooks/useCurrentUser";
const { Header, Footer, Sider, Content } = Layout;

const DashboardView = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
        
        <Layout style={{
          minHeight: '100vh',
        }}>
          <Header style={{backgroundColor: '#fff'}}>
           <DashboardHeader/>
          </Header>

        <Layout className="site-layout">
          <Sider collapsible collapsed={collapsed} onCollapse={toggle}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item key="1" icon={<UserOutlined />}>
                <Link to="/users">Users</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<CarOutlined/>}>
                <Link to="/Vehicles">Vehicles</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
              <UserInfoProvider>
                  <DashboardBody/>
              </UserInfoProvider>
          </Content>
        </Layout>
        <DashboardFooter />
      </Layout>
 
    </>
  );
};

export default DashboardView;
