import { Card, Form, Input, Button, message } from "antd";
import React from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utilities/Firebase";

import Cookies from "js-cookie";

const LoginPage = () => {
  const loginHandler = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        Cookies.set("uid", user.user.uid);
        window.location.replace("/");
      })
      .catch((err) => {
        message.error("Wrong email or password.");
      });
  };

  return (
    <div
      style={{
        backgroundColor: "#10396C",
        height: "100%",
        width: "100%",
        zIndex: 1000,
        position: "fixed",
        textAlign: "center",
        left: 0,
        top: 0,
      }}
    >
      <Card
        bordered={false}
        style={{
          width: "30vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30vh",
          backgroundColor: "#154D92",
          color: "white",
          boxShadow: "2px 3px rgba(5,17,32,0.5)",
        }}
      >
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
    </div>
  );
};

export default LoginPage;
