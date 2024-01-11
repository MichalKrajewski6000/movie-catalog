import { Avatar, Dropdown, Menu, Popover } from "antd";
import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "../../utilities/Firebase";

import Cookies from "js-cookie";
import { Link, Navigate } from "react-router-dom";

const dropdownItems = [
  {
    key: "toWatch",
    label: "Movies to Watch",
    onClick: () => {
      <Navigate to="to-watch" replace />;
    },
  },
  {
    key: "logout",
    label: "Sing Out",
    onClick: () => {
      signOut(auth).then(() => {
        Cookies.remove("uid");
        window.location.replace("/login");
      });
    },
  },
];

const AppHeader = ({ user }) => {
  return user ? (
    <>
      <Popover
        trigger="hover"
        placement="bottomLeft"
        content={
          <Menu>
            <Menu.Item key="toWatch">
              <Link to="/to-watch">Movies to watch</Link>
            </Menu.Item>
            <Menu.Item
              key="signOut"
              onClick={() => {
                signOut(auth).then(() => {
                  Cookies.remove("uid");
                  window.location.replace("/login");
                });
              }}
            >
              Sign Out
            </Menu.Item>
          </Menu>
        }
      >
        <Avatar
          size="large"
          style={{ backgroundColor: "navy", margin: 5, paddingBottom: 10 }}
        >
          {user.name[0]}
        </Avatar>
      </Popover>
      {user.name}
    </>
  ) : (
    <></>
  );
};

export default AppHeader;
