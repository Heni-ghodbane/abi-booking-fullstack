import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Button, Col, Input, Row, Space, Table, Tag, Typography} from "antd";
import { findUsersByLastName, getUsers, deleteUserById, getUserById } from "../../../../services/services";
import { User } from "../../../../shared/types";
import { DeleteOutlined, ExpandAltOutlined } from "@ant-design/icons";
import UserDetailsView from "./UserDetailsView";
import { useCurrentUser } from "./hooks/useCurrentUser";

const UsersView = forwardRef((_props, ref) => {
    const { Title, Text } = Typography;
    const { Search } = Input;
    const [users, setUsers] = useState([]);
    const {setCurrentUser} = useCurrentUser();

    const [isModalVisible, setIsModalVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      onCloseModal(){
        setIsModalVisible(false);
      },
    }))

    const columns = [
        {
          title: 'First name',
          dataIndex: 'firstName',
          key: 'firstName',
        },
        {
          title: 'Last name',
          dataIndex: 'lastName',
          key: 'lastName',
        },
        {
          title: 'E-mail',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Birthday',
          key: 'birthday',
          dataIndex: 'birthday',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record: User) => (
            <Space size="middle">
              <Button type="link" onClick={() => handleShowUserDetails(record.id)}><ExpandAltOutlined /> Show</Button>
              <Button type="link" onClick={() => handleDelete(record.id)} style={{color:'red'}}><DeleteOutlined /> Delete</Button>
            </Space>
          ),
        },
    ];
      
    const fetchUsers = async () => {
      const result = await getUsers();
      setUsers(result.data);
    };

    const fetchUserById = async (id: string) => {
      const result = await getUserById(id);
      setCurrentUser(result.data);
    };

    const handleShowUserDetails = async (id: string) => {
      await fetchUserById(id)
      setIsModalVisible(true)
    }

    const handleDelete = async (id: string) => {
      await deleteUserById(id)
      fetchUsers()
    }

    const handleSearch = async (value: string) => {
        if(value.length > 0){
          const result = await findUsersByLastName(value);
          setUsers(result.data);
        } else {
          fetchUsers();
        }
    
    };

    useEffect(() => {
      fetchUsers();
    }, [])
  
 
  return (
    <>
       <Row>
          <Col span={12}>
            <Title level={3}>List of Users</Title>   
          </Col>
          <Col span={12}>
            <Row justify={"end"}>
              <Search placeholder="search by Last name" onSearch={handleSearch} style={{ width: 200, paddingBottom: '10px' }} />
            </Row>
          </Col> 
        </Row> 

        <Table columns={columns} dataSource={users} />
        <UserDetailsView 
          isOpen={isModalVisible}
          onRequestClose={setIsModalVisible}
        />
    </>
    );
  })

export default UsersView;