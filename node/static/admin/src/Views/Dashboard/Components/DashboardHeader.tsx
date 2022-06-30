 import { DownOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import {Avatar, Col, Row, Space, Typography, Image, Dropdown, Menu } from 'antd';
import React from "react";
import { Link } from 'react-router-dom';
import { imagesPath } from '../../../shared/Utils';
 

const DashboardHeader = () => {
    const { Title, Text } = Typography;

    const menu = (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />}>
                 <Link to="/myProfile">My Profile</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<SettingOutlined/>}>
                <Link to="/settings">Settings</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<LogoutOutlined />}>Logout</Menu.Item>
        </Menu>
    );
      
    return (
        <>
            <Row>
                 <Col span={12}>
                 <Image src={`${imagesPath}/logo_audi.jpg`} preview={false} style={{ width: 240, height: 60 }} />
                </Col>
                <Col span={12} >
                    <Row justify="end" >
                      <Dropdown overlay={menu} placement="bottomRight" arrow trigger={['click']}>
                        <a onClick={e => e.preventDefault()}>
                            <Space align="center">
                                <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" preview={false} style={{ width: 35 }} />} />
                                <Text style={{fontSize: 15, fontWeight: 'bold'}}>Heni Ghodbane</Text>
                                <DownOutlined />
                            </Space>
                        </a>
                       </Dropdown>
                    </Row>
                </Col>
            </Row>
        </>
    )
};

export default DashboardHeader;

