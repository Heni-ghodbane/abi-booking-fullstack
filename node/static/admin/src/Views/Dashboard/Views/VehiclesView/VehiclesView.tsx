import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space, Table, Tag, Typography} from "antd";
import { deleteVehicleById, getVehicles } from "../../../../services/services";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const VehiclesView = () => {
  const { Title, Text } = Typography;
  const [vehicles, setVehicles] = useState([]);
 
  const columns = [
      {
        title: 'License Plate',
        dataIndex: 'licensePlate',
        key: 'licensePlate',
      },
      {
        title: 'VIN',
        dataIndex: 'vin',
        key: 'vin',
      },
      {
        title: 'Model',
        dataIndex: 'model',
        key: 'model',
      },
      {
        title: 'Status',
        dataIndex: 'active',
        key: 'active',
        render: (status) => (
            <Tag color={status ? 'green' : 'red'} key={'status'}>
              {status ? 'Active' : 'Inactive'}
            </Tag>
        ),
      },
      {
        title: 'Color',
        key: 'color',
        dataIndex: 'color',
      },
      {
        title: 'Valid',
        key: 'validTill',
        dataIndex: 'validTill',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
              <Button type="link" onClick={() => handleDelete(record.id)} style={{color:'red'}}><DeleteOutlined /> Delete</Button>
          </Space>
        ),
      },
  ];
    
  const fetchVehicles = async () => {
    const result = await getVehicles();
    setVehicles(result.data);
  };

  const handleDelete = async (id: string) => {
    await deleteVehicleById(id)
    fetchVehicles()
  }
  
  useEffect(() => {
    fetchVehicles();
  }, [])

return (
  <>
      <Row>
          <Col span={12}>
            <Title level={3}>List of Vehicles</Title>
          </Col>
          <Col span={12}>
            <Row justify={"end"}>
              <Button href="/vehicles/create" icon={<PlusOutlined />}>New vehicle</Button>           
            </Row>
          </Col> 
        </Row>
      <Table columns={columns} dataSource={vehicles} />
  </>
);
};

export default VehiclesView;