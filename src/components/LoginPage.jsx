import { Button, Card, Form, Input } from "antd";
import React from "react";

const LoginPage = () => {

    const containerStyle = {
        backgroundColor: "whitesmoke",
        width: "30vw",
        margin: "auto",
        marginTop: 100
    }

    return <Card style={containerStyle}>
        <Form>
            <Form.Item label="email">
                <Input type="text" name="email" />
            </Form.Item>
            <Form.Item label="password">
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary">Sign In</Button>
            </Form.Item>
        </Form>
    </Card>
}

export default LoginPage;