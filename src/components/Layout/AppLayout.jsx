import React from "react";
import { Layout } from "antd";
import AppHeader from "./AppHeader";

const { Header, Content, Footer } = Layout;

const AppLayout = ({children}) => {
    return <Layout style={{ margin: 0, padding: 0, height: "100vh"}}>
        <Header style={{ height: "10%", backgroundColor: "whitesmoke", marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0}}>
            <AppHeader />
        </Header>
        <Content style={{height: "80vh", backgroundColor: "white"}}>
            {children}
        </Content>
        <Footer style={{ height: "10%", backgroundColor: "whitesmoke", marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0, marginBottom: 0}}>
            Stopka
        </Footer>
    </Layout>
}

export default AppLayout;