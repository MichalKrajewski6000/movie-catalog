import React from "react";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const AppLayout = ({children}) => {
    return <Layout style={{ height: '100%', margin: 0, padding: 0}}>
        <Header>
            Header
        </Header>
        <Content>
            {children}
        </Content>
        <Footer>
            Footer
        </Footer>
    </Layout>
}

export default AppLayout;