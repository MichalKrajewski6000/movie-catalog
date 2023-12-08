import React from "react";
import { Layout } from "antd";
import AppFooter from "./AppFooter.jsx";
import AppHeader from "./AppHeader.jsx";
import { observer } from "mobx-react-lite";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ user, children }) => {
  return (
    <Layout style={{ margin: 0, padding: 0, zIndex: 1500 }}>
      <Header style={{ color: "white " }}>
        <AppHeader user={user} />
      </Header>
      <Content style={{ backgroundColor: "#10396C", padding: 10 }}>
        {children}
      </Content>
      <Footer
        style={{
          margin: 0,
          backgroundColor: "#051120",
          color: "white",
          height: "20vh",
          justifyContent: "center",
          display: "block",
        }}
      >
        <AppFooter />
      </Footer>
    </Layout>
  );
};

export default observer(AppLayout);
