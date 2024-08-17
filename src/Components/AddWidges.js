import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import { useAuth } from "../dashboardContext";
const { Option } = Select;

function AddWidges() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const { addWidget } = useAuth(); // Get the addWidget function from context

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // Trigger validation for all fields
    form.validateFields().then((values) => {
      const { category, name, description } = values;

      // Call addWidget with the validated form values
      addWidget(category, name, description);

      // Reset the form fields after successful submission
      form.resetFields();
    }).catch(errorInfo => {
      // Handle validation errors here
      console.error("Validation Failed:", errorInfo);
    });
  };
  return (
    <>
      <Button onClick={showDrawer} icon={<PlusOutlined />}>
        Add Widget
      </Button>
      <Drawer
        title="Add Widget"
        width={520}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
      >
        <Form layout="vertical" form={form} hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="category"
                label="Category"
                rules={[
                  {
                    required: true,
                    message: "Please select Category",
                  },
                ]}
              >
                <Select placeholder="Please select Category">
                  <Option value="CSPM">CSPM Executive Dashboard</Option>
                  <Option value="CWPP">CWPP Dashboard</Option>
                  <Option value="Registry">Registry Scan</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Widget Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter widget name",
                  },
                ]}
              >
                <Input placeholder="Please enter widget name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Widget Text"
                rules={[
                  {
                    required: true,
                    message: "please enter widget description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter widget text"
                />
              </Form.Item>
            </Col>
          </Row>
          <Space>
            <Button onClick={handleSubmit} type="primary">
              Create Widget
            </Button>
          </Space>
        </Form>
      </Drawer>
    </>
  );
}

export default AddWidges;
