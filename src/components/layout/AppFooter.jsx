import { Row, Col, Avatar } from "antd";
import React from "react";

const packageJson = require("../../../package.json");

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const AppFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Row>
        <Col span={3} offset={9}>
          <a href={packageJson.linkedIn}>
            <Avatar
              size={64}
              style={{ backgroundColor: "white", color: "black" }}
              icon={<AiFillLinkedin size={48} style={{ paddingTop: 12 }} />}
            />
          </a>
        </Col>
        <Col span={3} offset={1}>
          <a href={packageJson.gitHub} style={{ color: "black" }}>
            <Avatar
              size={64}
              style={{ backgroundColor: "white", color: "black" }}
              icon={<AiFillGithub size={48} style={{ paddingTop: 12 }} />}
            />
          </a>
        </Col>
      </Row>
      <Row style={{ marginTop: "5vh" }}>
        <Col>Version.{packageJson.version}</Col>
        <Col offset={20}>
          <p color="gray">
            {currentYear}@{packageJson.author}
          </p>
        </Col>
      </Row>
    </>
  );
};

export default AppFooter;
