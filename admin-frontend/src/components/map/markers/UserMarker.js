import { Avatar, Button, Popover, Tag } from "antd";
import React from 'react'
import { UserOutlined } from "@ant-design/icons"
const UserMarker = ({ userLocation, lat, lng }) => {
    return (
      <Popover
        content={
          <>
            <h6>{userLocation.name}</h6>
            <p>Role <Tag color="
#108ee9" >{userLocation.role}</Tag></p>
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