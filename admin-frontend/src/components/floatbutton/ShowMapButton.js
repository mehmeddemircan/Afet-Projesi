import { FloatButton } from "antd";
import React, { Fragment } from "react";
import { CustomerServiceOutlined } from "@ant-design/icons";
const ShowMapButton = () => {
  return (
    <Fragment>
      <FloatButton
        type="button"
        className="rounded-pill"
        shape="square"
        description={
          <div className="d-flex align-items-center">
            <a
              className="text-white "
              style={{ fontSize: "16px", textDecoration: "none" }}
            >
              Show Map
            </a>
            <i class="fa-solid fa-map mx-2 fs-5 text-white"></i>
          </div>
        }
        style={{
          backgroundColor: "#222",
          width: "150px",
          height: "50px",
          right: "45vw",
        }}
      />
    </Fragment>
  );
};

export default ShowMapButton;
