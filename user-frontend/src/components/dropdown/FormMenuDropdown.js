import { Badge, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React from "react";

const items = [
  {
    label: (
      <Badge>
        <a
          class="me-2 mt-1 text-dark"
          href={`/giyim-formlarım`}
          style={{ textDecoration: "none", fontSize: "18px" }}
        >
          Giyim Formlarım
        </a>
      </Badge>
    ),
    key: "0",
  },
  {
    label: (
      <Badge>
        <a
          class="me-2 mt-1 text-dark"
          href="/barınma-formlarım"
          style={{ textDecoration: "none", fontSize: "18px" }}
        >
          Barınma Formlarım
        </a>
      </Badge>
    ),
    key: "1",
  },
  {
    label: (
      <Badge>
        <a
          class="me-2 mt-1 text-dark"
          href="/gida-formlarım"
          style={{ textDecoration: "none", fontSize: "18px" }}
        >
          Gıda Formlarım
        </a>
      </Badge>
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
      className="mt-1 text-dark mx-2 "
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
          <a>Formlarım</a>
          <DownOutlined className="mb-1" />
        </Space>
      </a>
    </Dropdown>
  );
};

export default FormMenuDropDown;
