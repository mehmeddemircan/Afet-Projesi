import { Card, Carousel, Tooltip, Image, Avatar } from "antd";
import React, { useState } from "react";

const { Meta } = Card;
const ClotheProductItem = ({ item }) => {
  return (
    <Card
      hoverable
      style={{
        width: 300,
      }}
      className="my-3 mx-2"
      cover={
        <div
          style={{
            position: "relative",
            display: "inline-block",
          }}
        >
          <Image.PreviewGroup>
            <Carousel dotPosition="bottom" arrows>
              {item.images &&
                item.images.map((image) => (
                  <Image
                    alt="example"
                    src={image.url}
                    height={182}
                    width={300}
                    style={{ objectFit: "cover" }}
                  />
                ))}
            </Carousel>
          </Image.PreviewGroup>

          <Tooltip placement="topLeft" title="Add Wishlist">
            <button
              className="btn btn-md "
              style={{ position: "absolute", top: 0, right: 0 }}
              // onClick={handleDeleteProduct}
            >
              <i
                class="fa-regular fa-heart "
                style={{
                  fontSize: "21px",
                }}
              ></i>
            </button>
          </Tooltip>
        </div>
      }
    >
      <Meta title={item.title} description={<p>Price : {item.price} TL</p>} />
    </Card>
  );
};

export default ClotheProductItem;
