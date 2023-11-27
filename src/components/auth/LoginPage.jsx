import { Card, Form, Input, Button } from "antd";
import React from "react";

const LoginPage = () => {
  const loginHandler = ({ email, password }) => {};

  return (
    <Card>
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={loginHandler}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Email is required!!!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Password is required!!!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button htmlType="submit" type="primary">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginPage;
