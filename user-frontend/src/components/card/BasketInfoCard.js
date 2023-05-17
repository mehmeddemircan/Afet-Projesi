import { Card } from "antd";
import React from "react";

const BasketInfoCard = () => {
  return (
    <Card
      title="Card title"
      bordered={true}
      className="col-md-4"
      style={{
        maxHeight: 400,
      }}
      extra={
        <button
          className="btn btn-dark rounded-pill w-100 mb-3"
          style={{ position: "absolute", bottom: 0, right: 0 }}
        >
          {" "}
          Ödeme yap
        </button>
      }
    >
      <p>Toplam Fiyat : </p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  );
};

export default BasketInfoCard;
