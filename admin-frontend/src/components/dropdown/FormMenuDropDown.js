import { Badge, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";

const items = [
  {
    label: (
        <Badge.Ribbon text="New" >
      <a
        class="me-2 mt-1 text-dark"
        href="/giyimformu"
        style={{ textDecoration: "none", fontSize: "18px" }}
      >
        Giyim Formu oluştur
      </a>
      </Badge.Ribbon>
    ),
    key: "0",
  },
  {
    label: (
        <Badge.Ribbon text="New">
      <a
        class="me-2 mt-1 text-dark"
        href="/barinmaformu"
        style={{ textDecoration: "none", fontSize: "18px" }}
      >
        Barınma Formu oluştur
      </a>
      </Badge.Ribbon>
    ),
    key: "1",
  },
  {
    label: (
        <Badge.Ribbon text="New">
      <a
        class="me-2 mt-1 text-dark"
        href="/gidaformu"
        style={{ textDecoration: "none", fontSize: "18px" }}
      >
        Gıda Formu oluştur
      </a>
      </Badge.Ribbon>
    ),
    key: "2",
  },
];
const FormMenuDropDown = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      className="mt-1 text-dark mx-3"
      style={{
        textDecorationLine: "none",
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space
          style={{
            fontSize: "16px",
          }}
        >
          <a >Form Menu</a>
          <DownOutlined className="mb-1" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default FormMenuDropDown;
