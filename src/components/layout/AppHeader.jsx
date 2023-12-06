import { Avatar, Dropdown } from "antd";
import React from "react";

import { signOut } from "firebase/auth";
import { auth } from "../../utilities/Firebase";

import Cookies from "js-cookie";

const dropdownItems = [
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
      <Dropdown menu={{ items: dropdownItems }}>
        <Avatar
          size="large"
          style={{ backgroundColor: "navy", margin: 5, paddingBottom: 10 }}
        >
          {user.name[0]}
        </Avatar>
      </Dropdown>
      {user.name}
    </>
  ) : (
    <></>
  );
};

export default AppHeader;
