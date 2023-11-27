import React from "react";
import { Layout } from "antd";
import AppFooter from "./AppFooter.jsx";

const { Header, Content, Footer } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout style={{ height: "100vh", margin: 0, padding: 0 }}>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer
        style={{
          margin: 0,
          backgroundColor: "#051120",
          color: "white",
          width: "100vw",
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

export default AppLayout;
