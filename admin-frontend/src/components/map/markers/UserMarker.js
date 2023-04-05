import { Avatar, Button, Popover } from "antd";
import React from 'react'
import { UserOutlined } from "@ant-design/icons"
const UserMarker = ({ userLocation, lat, lng }) => {
    return (
      <Popover
        content={
          <>
            <h6>{userLocation.name}</h6>
            <a>lat : {lat}</a>
            <a>lat : {lng}</a>
          </>
        }
      >
        <Button type="link">
          <Avatar icon={<UserOutlined />} />
        </Button>
      </Popover>
    );
  };
export default UserMarker