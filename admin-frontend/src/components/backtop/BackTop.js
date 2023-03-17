import React, { Fragment } from "react";
import { FloatButton, Button, BackTop } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";

const BackTopButton = () => {
  const backtopStyle = {
    height: 40,
    width: 40,
    lineHeight: "30px",
    borderRadius: 10,
    backgroundColor: "#1088e9",
    color: "#fff",
  };
  return (
    <Fragment>
      <BackTop>
        <Button
          style={backtopStyle}
          icon={<ArrowUpOutlined style={{ fontSize: 20 }} />}
        />
      </BackTop>
    </Fragment>
  );
};

export default BackTopButton;
