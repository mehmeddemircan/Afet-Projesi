import { Card, List, Image, Tooltip } from "antd";

import React, { Fragment } from "react";
const { Meta } = Card;
const AddedReqProductItem = ({ reqProduct, handleRemoveProductFromArea }) => {
  return (
    <Fragment>
      <Card
        hoverable
        style={{
          width: 300,
        }}
        className="my-3"
        cover={
          <div
            style={{
              position: "relative",
              display: "inline-block",
            }}
          >
            <Image.PreviewGroup>
              <Image
                alt="example"
                src={
                  reqProduct.Product.images.length == 0
                    ? "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    : reqProduct.Product.images[0].url
                }
                height={182}
                width={300}
                style={{ objectFit: "cover" }}
              />
            </Image.PreviewGroup>

            <Tooltip placement="topLeft" title="Remove ">
              <button
                className="btn btn-sm "
                style={{ position: "absolute", top: 0, right: 0 }}
                onClick={() => handleRemoveProductFromArea(reqProduct._id)}
              >
                <i class="fa-solid fa-x"></i>
              </button>
            </Tooltip>
          </div>
        }
      >
        <Meta
          title={reqProduct.Product.title}
          description="This is the description"
        />
      </Card>
    </Fragment>
  );
};

export default AddedReqProductItem;
