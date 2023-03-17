import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
const items = [
  {
    label: (
      <a
        class="me-2 mt-1"
        href="/kisiler"
        style={{ textDecoration: "none", fontSize: "18px" }}
      >
        Kisiler
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        class="me-2 mt-1 "
        href="/alanlar"
        style={{ textDecoration: "none", fontSize: "18px" }}
      >
        Alanlar
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        class="me-2 mt-1 "
        href="/kategoriler"
        style={{ textDecoration: "none", fontSize: "18px" }}
      >
        Kategoriler
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        class="me-2 mt-1 "
        href="/altkategoriler"
        style={{ textDecoration: "none", fontSize: "18px" }}
      >
        Alt Kategoriler
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        class="me-2 mt-1 "
        href="/kullanicilar"
        style={{ textDecoration: "none", fontSize: "18px" }}
      >
       Kullanıcılar
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a
        class="me-2 mt-1 "
        href="/urunler"
        style={{ textDecoration: "none", fontSize: "18px" }}
      >
       Ürünler
      </a>
    ),
    key: "5",
  },
];
const HeaderMenuDropDown = () => (
  <Dropdown
    menu={{
      items,
    }}
    className="mt-1 text-dark"
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
        <a>Menu</a>
        <DownOutlined className="mb-1" />
      </Space>
    </a>
  </Dropdown>
);
export default HeaderMenuDropDown;
