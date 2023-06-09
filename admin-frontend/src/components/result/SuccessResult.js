import React, { Fragment } from "react";
import MainLayout from "../layout/MainLayout";
import { Button, Result } from "antd";

const SuccessResult = () => {
  return (
    <Fragment>
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
          <Button key="buy" >Buy Again</Button>,
        ]}
      />
    </Fragment>
  );
};

export default SuccessResult;
