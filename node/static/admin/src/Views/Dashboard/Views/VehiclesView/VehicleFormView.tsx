import React, { useState } from "react";
import { Form, Input, Button, Typography, Col, Row, Space, DatePicker, Switch } from "antd";
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { createVehicle } from "../../../../services/services";
import { useNavigate } from "react-router-dom";
import { validateMessages } from "../../../../shared/Utils";
import moment from "moment";

const VehicleFormView = () => {
  const { Title, Text } = Typography;
  const navigate = useNavigate();
  const { RangePicker } = DatePicker;
  
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const onFinish = (values: any) => {
    createVehicle(values).then((succes) => {
      navigate("/vehicles");
    }, (error) => {
      console.log(`Vehicule not created ${error}`)
    })
  };

  // eslint-disable-next-line arrow-body-style
  const disabledDate: RangePickerProps['disabledDate'] = current => {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  };
  
  {/*const onChange = (
    value: DatePickerProps['value'] | RangePickerProps['value'],
    dateString: [string, string] | string,
  ) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
    console.log('onOk: ', value);
  };
  */}

  return (
    <>
      <Row>
        <Title level={3}>New Vehicule</Title>
      </Row>
      <Row justify="start">
        <Col span={12}>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["licensePlate"]}
              label="License Plate"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["vin"]}
              label="VIN"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["model"]}
              label="Model"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["active"]}
              label="Status"
            >
              <Switch
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                defaultChecked
              />
            </Form.Item>
            <Form.Item
              name={["color"]}
              label="Color"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
       
            <Form.Item
              name={["validTill"]}
              label="Valid until"
              rules={[{ required: true }]}
            >
                <DatePicker showTime showNow={false}
                disabledDate={disabledDate}
                //onChange={onChange} 
                //onOk={onOk} 
               />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default VehicleFormView;
