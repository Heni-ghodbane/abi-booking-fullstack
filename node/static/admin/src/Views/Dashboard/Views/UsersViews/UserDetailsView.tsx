import React from "react";
import { Typography, Modal, Space } from "antd";
import { useCurrentUser } from "./hooks/useCurrentUser";

const UserDetailsView = ({isOpen, onRequestClose}) => {
  const { Title, Text } = Typography;
  const {currentUser} = useCurrentUser();

  const handleCancel = () => {
    onRequestClose(false);
  };

  return (
    <>
      <Modal title="User Details" footer={null} visible={isOpen} onCancel={handleCancel}>
        <Space direction="vertical">
            <Space direction="horizontal">
              <Text strong>Full name:</Text>
              <Text>{currentUser?.firstName} {currentUser?.lastName}</Text>
            </Space>
            <Space direction="horizontal">
              <Text strong>Birthday:</Text> <Text>{currentUser?.birthday}</Text>
            </Space>
            <Space direction="horizontal">
              <Text strong>Contact:</Text> <a href={`mailto:${currentUser?.email}`}>{currentUser?.email}</a>
            </Space>
         </Space>
      </Modal>
    </>
  );
};

export default UserDetailsView;
